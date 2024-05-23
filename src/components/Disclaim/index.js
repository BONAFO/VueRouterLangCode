

export default async function INIT({lang}){
    const Text = await (async () => {
        switch (lang.toLowerCase()) {
          case "en":
            return import("@/Text/en/Disclaim.json");
          case "sp":
            return import("@/Text/sp/Disclaim.json");
        }
      })();
    
    return {
     ...Text   
    }
}1