// import Text from "@/Text/Home.json"

export default async function INIT({ lang }) {
  const Text = await (async () => {
    switch (lang.toLowerCase()) {
      case "en":
        return import("@/Text/en/Home.json");
      case "sp":
        return import("@/Text/sp/Home.json");
    }
  })();


  return {
    ...Text
  };
}
