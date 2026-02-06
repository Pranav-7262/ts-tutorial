interface User {
  id: number;
  name: string;
  email: string;
}
const fetchData = async () => {
  try {
    const response = await fetch("https://example.com");
    if (!response.ok) {
      throw new Error(`Http error ${response.status}`);
    }
    const data: User = await response.json();
    console.log(data);
  } catch (error: any) {
    console.error(error);
  }
};
