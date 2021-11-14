import axios from "axios";

const Key = "5943424ce8mshcbfabcc7d419dc3p1d82dfjsndb6beaee9661";

export default axios.create({
  baseURL: "https://andruxnet-random-famous-quotes.p.rapidapi.com/",
  params: {
    key: Key,
    cat: "famous",
  },
});
