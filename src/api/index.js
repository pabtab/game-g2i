const getQuestionsApi = async () => {
  const dataFetch = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean') ;
  const data = await dataFetch.json();
  return data.results;
}

export {
  getQuestionsApi
};