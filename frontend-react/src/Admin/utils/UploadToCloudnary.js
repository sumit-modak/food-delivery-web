export const uploadToCloudinary = async (pics) => {
    
    if (pics) {

       
      
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "zosh-social");
      data.append("cloud_name", "dcpesbd8q");
  
      const res = await 
      fetch(`https://api.cloudinary.com/v1_1/dcpesbd8q/image/upload`, {
        method: "post",
        body: data,
      })
        
        const fileData=await res.json();
        console.log("url : ", fileData);
        return fileData.url
  
    } else {
      console.log("error");
    }
  };