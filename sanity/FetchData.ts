import { client } from './lib/client'

const FetchData = async () => {
  const data = await client.fetch(`*[_type == "products"]`);
  console.log(data,"ggshs")
    return data
}

export default FetchData