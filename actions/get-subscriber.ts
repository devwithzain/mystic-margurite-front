const apiUrl = `https://mysticmarguerite.com/new/backend/api/newsletter/subscribes`;

const getSubscriber = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getSubscriber;