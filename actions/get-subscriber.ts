const apiUrl = `http://127.0.0.1:8000/api/newsletter/subscribes`;

const getSubscriber = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getSubscriber;