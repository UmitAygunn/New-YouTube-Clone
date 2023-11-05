try {
  const response = await fetch("https://youtube-v38.p.rapidapi.com/search/?part=snippet&order=date&q=reactjs", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '247281dd37msh9a843494069bf29p1322eajsn6a7341340185',
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}