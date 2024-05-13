const FtpDeploy = require("ftp-deploy")
const ftp = require("basic-ftp")
const basicFtpClient = new ftp.Client()
const https = require("https")

const LOCAL_BUILD_DIRECTORY = "public"
const PRODUCTION_URL = "https://maroon-studio.com/"

const [host, user, password] = process.argv.slice(2)

function main() {
    return uploadBuildDirectory()
        .catch((error) => onError("Upload", error))
        .then(async (backupDirectoryName) => {
            const isLive = await isProductionLive()
            if (!isLive) return rollBackProduction(backupDirectoryName)
        })
        .catch((error) => onError("Rollback", error))
        .then(() => {
            console.log("Deploy FINISHED")
            basicFtpClient.close()
            process.exit(0)
        })
}

function uploadBuildDirectory() {
    const config = {
        host,
        user,
        password,
        localRoot: `./${LOCAL_BUILD_DIRECTORY}`,
        remoteRoot: `./`,
        include: ["*", "**/*"],
    }

    const ftpDeploy = new FtpDeploy()

    ftpDeploy.on("uploading", (data) => {
        const { totalFilesCount, transferredFileCount, filename } = data
        console.log(
            `${transferredFileCount} out of ${totalFilesCount} ${filename}`
        )
    })

    ftpDeploy.on("upload-error", (data) => {
        console.log(data.err)
        throw new Error("Upload FAILED")
    })

    return ftpDeploy.deploy(config).then(() => console.log(`Upload COMPLETED`))
}

function isProductionLive() {
    return new Promise((resolve) => {
        https
            .get(PRODUCTION_URL, (res) => {
                console.log(`Production status code ${res.statusCode}`)
                resolve(res.statusCode === 200)
            })
            .on("error", (_) => {
                resolve(false)
            })
    })
}

function rollBackProduction(backupDirectoryName) {
    console.log("Rolling back production...")

    const ftpDeploy = new FtpDeploy()

    const config = {
        host,
        user,
        password,
        localRoot: `./${backupDirectoryName}`,
        remoteRoot: `./`,
        include: ["*", "**/*"],
    }

    ftpDeploy.on("uploading", (data) => {
        const { totalFilesCount, transferredFileCount, filename } = data
        console.log(
            `${transferredFileCount} out of ${totalFilesCount} ${filename}`
        )
    })

    ftpDeploy.on("upload-error", (data) => {
        console.log(data.err)
        throw new Error("Rollback FAILED")
    })

    return ftpDeploy
        .deploy(config)
        .then(() => console.log(`Rollback COMPLETED`))
}

function onError(name, error) {
    console.log(`${name} FAILED`)
    console.log(error)
    fail()
}

function fail() {
    basicFtpClient.close()
    process.exit(1)
}

main()
