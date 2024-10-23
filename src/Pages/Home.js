import React, { useState } from "react";
import {
  Card,
  Box,
  Center,
  Stack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Spinner,
} from "@chakra-ui/react";
import SearchBar from "../Components/SearchBar";
import CurrentWeather from "../Components/CurrentWeather";
import HourlyWeather from "../Components/HourlyWeather";
import Temperature from "../Components/Chart/Temperature";
import Daily from "../Components/Daily";
import Location from "../Components/Location";
import Fetching from "../Components/Service/Fetching";
import Precipitation from "../Components/Chart/Precipitation";

function Home() {
  const [search, setSearch] = useState("Sydney");
  const { loading, weather, error } = Fetching(search);

  if (loading) {
    return (
      <Box h={{ base: "80vh", md: "80vh", lg: "80vh" }}>
        <Center>
          <Spinner />
        </Center>
      </Box>
    );
  }

  if (error) {
    return (
      <Box h={{ base: "80vh", md: "80vh", lg: "80vh" }} spacing={3}>
        <Center>
          <Text>Error occured.</Text>
        </Center>
        <Center>
          <Text>Reflesh the page and search again.</Text>
        </Center>
      </Box>
    );
  }

  return (
    <Stack
      h={{ base: "215vh", sm: "230vh", md: "130vh", lg: "130vh" }}
      spacing={3}
      align="center"
    >
      <Box>
        <SearchBar onSubmit={setSearch} />
      </Box>
      {!error ? (
        <div>
          <Center>
            <Location
              city_name={weather.name}
              country_name={weather.country}
              local_time={weather.localtime}
            />
          </Center>

          <Box p={3} display={{ md: "flex" }}>
            <Box flexShrink={0}>
              <CurrentWeather
                currentTemp={weather.temp_c}
                currentIcon={weather.icon}
                currentCondition={weather.text}
                currentRain={weather.precip_mm}
                currentWind={weather.wind_kph}
                currentHumidity={weather.humidity}
              />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Center>
                <Card
                  h={{ base: "85vh", sm: "85vh", md: "45vh", lg: "50vh" }}
                  w={{
                    base: "63vh",
                    xs: "50px",
                    sm: "70vh",
                    md: "70vh",
                    lg: "100vh",
                  }}
                >
                  <Tabs variant="enclosed" colorScheme="purple">
                    <Box>
                      <TabList>
                        <Tab>Temp</Tab>
                        <Tab>Precipi</Tab>
                      </TabList>
                    </Box>

                    <TabPanels>
                      <TabPanel>
                        <Temperature tempData={weather.selectedHourlyItem} />
                      </TabPanel>
                      <TabPanel>
                        <Precipitation
                          precipiData={weather.selectedHourlyItem}
                        />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                  <HourlyWeather hourlyObj={weather.selectedHourlyItem} />
                </Card>
              </Center>
            </Box>
          </Box>
          <Box>
            <Daily dailyData={weather.selectedDailyItem} />
          </Box>
        </div>
      ) : (
        <Box h={{ base: "80vh", md: "80vh", lg: "80vh" }} spacing={3}>
          <Center>
            <Text>Error occured.</Text>
          </Center>
          <Center>
            <Text>Reflesh the page and search again.</Text>
          </Center>
        </Box>
      )}
    </Stack>
  );
}

export default Home;
