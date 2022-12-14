import React, { Component } from "react";
import NewsItem from "../components/NewsItem";
export class News extends Component {
  res = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Vicky Bowman: UK ex-envoy to Myanmar handed one year jail term",
      description:
        "The judgment comes days after Vicky Bowman and her spouse were arrested for flouting visa rules.",
      url: "http://www.bbc.co.uk/news/world-asia-62764218",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/C8F3/production/_126434415_88b087a9-b6ed-4296-8ae8-f8e88cbfc707.jpg",
      publishedAt: "2022-09-02T07:52:28.6488645Z",
      content:
        "Vicky Bowman and her husband Htein Lin, a former political prisoner, were charged with violating immigration laws.",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "UN inspectors remain at Russian-held nuclear plant",
      description:
        "IAEA inspectors are going to stay at the Russian-held Zaporizhzhia power plant in southern Ukraine, the group's head says.",
      url: "http://www.bbc.co.uk/news/live/world-europe-62763523",
      urlToImage:
        "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2022-09-02T07:52:26.1648358Z",
      content:
        "This super-sensitive mission by the IAEAs nuclear experts was never likely to satisfy both sides, Ukraine and Russia. And sure enough, on Day 2 today, the accusations and counter accusations are flyi… [+1081 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Australia: Permanent migration cap raised for first time in decade",
      description:
        "The limit on migrant numbers will increase for the first time in a decade to stem worker shortages.",
      url: "http://www.bbc.co.uk/news/world-australia-62762158",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/163F6/production/_126562119_gettyimages-497127998.jpg",
      publishedAt: "2022-09-02T03:52:22.4725642Z",
      content:
        "By Tiffanie TurnbullBBC News, Sydney\r\nAustralia is raising its cap on permanent migration for the first time in a decade to help fill massive workforce shortages.\r\nIt will take up to 195,000 people t… [+1880 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Cristina Fernandez de Kirchner: 'Assassination attempt' on ex-Argentina president",
      description:
        "Video shows a man aim a gun at Cristina Fernandez de Kirchner but it does not fire.",
      url: "http://www.bbc.co.uk/news/world-latin-america-62762421",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/DD8C/production/_126561765_3a64336e97446298b8a438c0a764066b9779c053.jpg",
      publishedAt: "2022-09-02T02:22:23.7670414Z",
      content:
        "By Alex BinleyBBC News\r\nA man has been arrested after appearing to point a gun at Argentina's former president Cristina Fernandez de Kirchner outside her home.\r\nFootage shared by local media appears … [+933 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Three Canadian police charged in toddler shooting death",
      description:
        "The boy, 18 months old, was shot and killed during an interaction between his father and police in 2020.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62690172",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/D83B/production/_126555355_gettyimages-1327894263.jpg",
      publishedAt: "2022-09-02T01:52:29.0180267Z",
      content:
        "Three Canadian police officers have been charged in the shooting death of an 18-month-old child in November 2020. \r\nThe charges were announced following a nearly two year investigation by Ontario pol… [+2048 chars]",
    }, 

    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Mississippi residents warned to shower with mouths shut",
      description:
        "Nearly 200,000 people in Jackson have no safe drinking water after a flood damaged a treatment centre.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62761355",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/D170/production/_126561635_p0cxy7jw.jpg",
      publishedAt: "2022-09-02T01:52:23.3268088Z",
      content:
        "Last Soviet leader, Mikhail Gorbachev, dies aged 91. Video, 00:03:07Last Soviet leader, Mikhail Gorbachev, dies aged 91",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Canada: Why ERs are struggling to stay open nationwide",
      description:
        "A growing nursing shortage has put pressure on hospitals, and smaller ones are left with few options.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62716710",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/CD9F/production/_126493625_gettyimages-1235147267.jpg",
      publishedAt: "2022-09-02T00:22:24.707635Z",
      content:
        "By Nadine YousifBBC News\r\nOn a Thursday in mid-August, the doors of a hospital's emergency department two hours west of Toronto were shut. \r\nA note posted on the front said the ER was closed for the … [+7902 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Biden says 'Maga forces' threaten US democracy",
      description:
        "Mr Biden says Trump supporters want to take the US backwards. Republicans say Mr Biden has betrayed America.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62761428",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/8670/production/_126561443_screenshot2022-09-01at5.14.57pm.png",
      publishedAt: "2022-09-02T00:22:20.8351904Z",
      content:
        'By Sarah Smith &amp; Max MatzaBBC News\r\nSupporters of Donald Trump\'s "Make America Great Again" (Maga) agenda are a threat to democracy, President Joe Biden has said. \r\n"Maga forces are determined to… [+3638 chars]',
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "January 6: Ex-police officer gets record 10-year sentence over Capitol riots",
      description:
        "Thomas Webster, 56, attacked officers with a metal flagpole during the riots in January 2021.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62761037",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1375A/production/_126560797_webster.png",
      publishedAt: "2022-09-01T22:07:25.1612675Z",
      content:
        "By Matt MurphyBBC News\r\nAn ex-New York City police officer who assaulted law enforcement officials during the 6 January riots has been sentenced to 10 years in prison. \r\nThomas Webster, 56, was convi… [+1994 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Feist quits Arcade Fire tour, citing allegations against Win Butler",
      description:
        "The singer was supporting Arcade Fire on tour when frontman Win Butler was accused of misconduct.",
      url: "http://www.bbc.co.uk/news/entertainment-arts-62759868",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/A7F3/production/_126559924_gettyimages-1026298056.jpg",
      publishedAt: "2022-09-01T21:22:22.7744482Z",
      content:
        "By Mark SavageBBC Music Correspondent\r\nSinger-songwriter Feist has walked away from her support slot on Arcade Fire's world tour, after the band's frontman was accused of sexual misconduct.\r\nFour peo… [+3478 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      response: this.res,
    };
  }
  /*async componentDidMount() {
    let headlinesUrl =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0353104df37b4cd982f89b2ff237063b";
    let data = await fetch(headlinesUrl);
    let parsedData = await data.json();
    this.setState({ response: parsedData.articles });
  }*/
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.response.map((elem) => {
            return <div key={elem.url} className="col-md-4">
                <NewsItem
                  title={elem.title}
                  description={elem.description}
                  imgurl={elem.urlToImage}
                  url={elem.url}
                />
              </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
