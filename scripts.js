fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=64c90d37b8444ea393e3db1ffb5c4ee6').then(res=>res.json()).then(data=>displayData(data))

function displayData(data){

    var htmlData='';
    for(d of data.articles){
        var title=d.title?d.title:'No title available';
        var description=d.description?d.description:"No Description Available"
        var image=d.urlToImage?d.urlToImage:"No Image Available"
        var date=d.publishedAt?d.publishedAt:"Unknown"
        var date=date.substring(0,10)
        var url=d.url?d.url:"#"
        var author=d.author?d.author:"Unknown"
        var content=d.content?d.content:"No Content Available"
        var sourcename=d.source.name?d.source.name:"unknown"

        htmlData += `
        <div class=" my-3 border border-dark  p-3 shadow">
          <div class="row">
            <div class="col-6">
            <h6  class="time_author"><span>Published :</span>${sourcename}</h6>
            <span class="news_title">${title}</span>
            <h5><span class="time_author"></span>${date}</h5>
            </div>
    
                 
              
            <div class="col-6 w-50">
              
              <img class="newsimg" src="${image}" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5 class="my-2 des">${description}</h5>
              <p class="my-2">${content}</p>
              <hr>
              <div class="d-flex justify-content-between">
                <div>
                  <h5><span class="time_author">Author :</span>${author}</h5>
                </div>
                
              </div>
              <div class="my-4 text-center">
                <a href="${url}" class="btn btn-danger w-25 shadow mx-auto">Read More</a>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    document.getElementById('newscol').innerHTML = htmlData;
  }

  var category=["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
  htmlData1="";
  for(c of category){
    htmlData1+=`
    <button class="btn" onclick="newsFliterByCategory('${c}')"><h5>${c}</h5></button>`
    

  }
  document.getElementById('category').innerHTML=htmlData1;

 function newsFliterByCategory(c) {
  
    let country = document.getElementById('countrySelect').value;
    
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${c}&apiKey=64c90d37b8444ea393e3db1ffb5c4ee6`)
      .then(res => res.json())
      .then(data => displayData(data));
  }
  
  function search_news() {
    let content = document.getElementById('search_box').value;
  
    fetch(`https://newsapi.org/v2/everything?q=${content}&pageSize=20&apiKey=64c90d37b8444ea393e3db1ffb5c4ee6`)
      .then(res => res.json())
      .then(data => displayfilterData(data))
      .catch(error => {
        console.error(error);
      });

  }
  function displayfilterData(data){
    console.log(data)
  }
  function display_from_country(event){
    let country=event.value
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=64c90d37b8444ea393e3db1ffb5c4ee6&category=${c}`)
    .then(res=>res.json())
    .then(data=>displayData(data))
  
  }
  


