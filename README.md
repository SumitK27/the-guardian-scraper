# **The Guardian Scraper**

A node project that retrieves all news stories from [The Guardian UK](https://www.theguardian.com/uk), displays them in a human-readable style, and offers an API in addition to a bespoke web scraper.

[Demo Link](https://jolly-kit-bull.cyclic.app/)

## **Preview**

![Preview](./images/preview.png)

## **Packages Used**

-   **Express** - Setting up HTTP server
-   **Axios** - For sending HTTP requests
-   **Cheerio** - Web Scraping Library
-   **Cors** - Handling Cross Origin Requests

## **How to Use**

1. Clone the repo.
2. Goto the project folder and run `npm install`
3. Run `npm start` to run the server.
4. Open `localhost:3000/`

## **Endpoint**

```
Method: GET
Endpoint: `/articles`
```

```json
[
    {
        "title": [
            "NHS  One in four doctors tired to the point of impairment, survey finds"
        ],
        "url": "https://www.theguardian.com/society/2022/jan/17/nhs-doctors-tired-impairment-sleep-deprived-survey",
        "description": "NHS  One in four doctors tired to the point of impairment, survey finds Sleep deprived NHS doctors ‘I realised my error when the patient collapsed’Sleep deprived NHS doctors ‘I realised my error when the patient collapsed’One in four doctors tired to",
        "no_of_images": 6,
        "image": "https://i.guim.co.uk/img/media/e7aa178bbdd14549e4f061c74af7ba76525f30b2/0_0_5760_3456/master/5760.jpg?width=300&quality=85&auto=format&fit=max&s=765d15ecc9b0a21ad588f972b41a5ce9"
    },
    {
        "title": [
            "Live  Priti Patel confirms military is to be asked to help tackle Channel small boat crossings"
        ],
        "url": "https://www.theguardian.com/politics/live/2022/jan/17/uk-politics-boris-johnson-omicron-keir-starmer",
        "description": "Live  Priti Patel confirms military is to be asked to help tackle Channel small boat crossings  Priti Patel confirms military is to be asked to help tackle Channel small boat crossings ",
        "no_of_images": 6,
        "image": "https://i.guim.co.uk/img/media/a99113fb45abf1258e514371e7bb4579d3466daa/114_0_2312_1387/master/2312.jpg?width=300&quality=85&auto=format&fit=max&s=3613be7b21eb5f64471449017a153047"
    },
    ....
]
```
