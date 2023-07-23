import { useState, useEffect } from "react";
import { Image, Center } from "@chakra-ui/react";

function Fetching(search) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setWeather(await getformat(search));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [search]);
  return {
    loading,
    weather,
    error,
  };
}

async function getData(search) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${search}&days=7&aqi=no&alerts=no`;
  let res = await fetch(url);
  let data = await res.json();

  return data;
}
const formatCurrentItem = (data) => {
  const {
    location: { name, country, localtime },
    current: {
      temp_c,
      wind_kph,
      precip_mm,
      humidity,
      condition: { text, icon },
    },
  } = data;

  return {
    name,
    country,
    localtime,
    temp_c,
    wind_kph,
    precip_mm,
    humidity,
    text,
    icon,
  };
};
const chosenInde = [0, 4, 8, 12, 16, 20];
const formatHourlyData = (data) => {
  const {
    forecast: { forecastday },
  } = data;
  const { hour } = forecastday[0];
  const selectedHour = hour.filter((item, index) => chosenInde.includes(index));
  const selectedHourlyItem = selectedHour.map((h) => {
    return {
      hour_title: formatToHour(h.time_epoch),
      hour_t: h.time,
      hour_icon: formatIcon(h.condition.icon),
      hour_temp_c: h.temp_c,
      hour_rain: h.chance_of_rain,
    };
  });

  return { selectedHourlyItem };
};

const formatDailyData = (data) => {
  const {
    forecast: { forecastday },
  } = data;

  const selectedDailyItem = forecastday.map((d) => {
    return {
      day_title: formatToDay(d.date_epoch),
      day: d.date_epoch,
      day_temp_c: d.day.avgtemp_c,
      day_icon: formatIcon(d.day.condition.icon),
      day_rain: d.day.daily_chance_of_rain,
    };
  });
  return { selectedDailyItem };
};

const getformat = async (search) => {
  const formattedCurrentWeather = await getData(search).then(formatCurrentItem);
  const formattedHourlyWeather = await getData(search).then(formatHourlyData);
  const formattedDailyWeather = await getData(search).then(formatDailyData);

  return {
    ...formattedCurrentWeather,
    ...formattedHourlyWeather,
    ...formattedDailyWeather,
  };
};

function formatToHour(time_epoch) {
  const calc = new Date(time_epoch * 1000);
  const hour = calc.getHours();
  const formattedHour = hour % 12 || 12;
  const indicator = hour < 12 ? "AM" : "PM";
  const formattedTime = String(formattedHour).padStart(2);
  return formattedTime + indicator;
}
function formatToDay(time_epoch) {
  const calc = new Date(time_epoch * 1000);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = calc.getDay();
  const formattedDay = daysOfWeek[day];

  return formattedDay;
}

const formatIcon = (p) => {
  const url = `https:${p}`;

  return (
    <Center>
      <Image
        src={url}
        boxSize={{ base: "6vh", md: "8vh", lg: "10vh" }}
        objectFit="cover"
      />
    </Center>
  );
};

export default Fetching;
