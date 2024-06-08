export default () => {
  const hash = async (pass: string) => pass
  const compare = async (pass: string, hashPass: string) => pass === hashPass
  return { hash, compare }
}
