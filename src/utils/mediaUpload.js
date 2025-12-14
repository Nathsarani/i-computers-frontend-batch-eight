import { createClient } from "@supabase/supabase-js";

const url = "https://ujbvmfmkxwvluzjzwlip.supabase.co";
const key = "sb_publishable_JdHvEduTOF1sa8IUC2ABPw_enWxUa-p";

const supabase = createClient(url,key);

export default function uploadFile(file){

    return new Promise((resolve, reject) => {      //file upload and then after give that's file url

		const timeStamp = Date.now();
		const fileName = timeStamp + "_" + file.name;
		supabase.storage.from("images").upload(fileName, file, {
			cacheControl: "3600",
			upsert: false,
		}).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                resolve(publicUrl);
            }
        ).catch((error)=>{
            reject(error);
        })
	});

}