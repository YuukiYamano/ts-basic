export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/YuukiYamano'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    const resoponse = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!resoponse) {
      return null
    }

    const json = await resoponse
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous async await Sample 1:', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })
    if (!json) {
      return null
    }
    return json
  }

  const profile = await fetchProfile()
  if (profile) {
    console.log('Asynchronous async await Sample 2:', profile)
  }
}
