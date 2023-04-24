import { randomUUID } from "crypto";
import ImageKit from "imagekit";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const file = body.thumbnail
    const filename = "file_" + randomUUID
    const imagekit = new ImageKit({
        publicKey: `env("IMAGEKIT_PUBLIC_KEY")`,
        privateKey: `env("IMAGEKIT_PRIVATE_KEY")`,
        urlEndpoint: `env("URL_ENDPOINT")`
    });

    imagekit.upload({
        file: file, //required
        fileName: filename,   //required
        extensions: [
            {
                name: "google-auto-tagging",
                maxTags: 5,
                minConfidence: 95
            }
        ]
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
})