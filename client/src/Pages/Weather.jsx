import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { Box, Button, Center, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'

const Weather = () => {
    const [city,setCity]=useState({})
    const [weatherData,setWeatherData]=useState({})
    const [foreCast,setForeCast]=useState([])
    const [error,setError]=useState(false)
    const [gotData,setGotData]=useState(false)
    console.log(foreCast);
    const handleChange=(e)=>{
        setCity({
            cityname:e.target.value
        })
    }
    const handleClick=()=>{
        getWeatherData()
    }
    const handleForecast=()=>{
        ForeCastData()
    }
    const getWeatherData=()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.cityname}&appid=070263d29127d18e1b69c774a996ef65&units=metric`)
        .then((res)=>{
            setWeatherData(res.data)
            setGotData(true)
            setError(false)
        }).catch((err)=>{
            console.log("err",err.message)
            setError(true)
        })
    }
    const ForeCastData=()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord?.lat}&lon=${weatherData.coord?.lon}&exclude=current,hourly,minutely&appid=e4b61541705c6cb668a4b697b84d3660&units=metric`)
        .then((res)=>{
            setForeCast(res.data.daily)
        }).catch((err)=>{
            console.log("err",err.message)
        })
    }


  return (
   
    <Box style={{marginTop:"150px"}}>
         <Center>
        <Box>
             <Heading>Daily Weather Report</Heading>
             <Box>
                 <Input type="text" placeholder='City' onChange={handleChange} width={{base:'sm',md:'md',lg:'lg',xl:'xl'}} textAlign="center" mt={5} fontSize={'20'}/>
                 <br />
                 <br />
                 <Button onClick={handleClick} width={{base:'sm',md:'md',lg:'lg',xl:'xl'}} borderRadius={5} fontWeight="bold">Submit</Button>
             </Box>
             
        </Box>
        </Center>
        {
            gotData?(
                <Center>
                <Box>
                    <Box >
                        <Heading fontSize={{base:'sm',md:'md',lg:'lg',xl:'xl'}} textAlign={{base:"center"}}><span style={{color:"blue"}} onClick={handleForecast} mt={5}>Click Here </span>See the Next 7 Days ForeCast</Heading>
                    </Box>
                    <Flex direction={{base:'column',md:'row'}} width={{base:"sm",md:'md',lg:'lg',xl:'xl'}} mt={10} ml={{base:"5"}} >
                        <Box border={"1px solid red"} backgroundColor={'#ff0ed7'} fontWeight={'bold'} width={{base:'sm',md:'xl',lg:'xl',xl:'xl'}} textAlign="left" pl={'5'}  mt={{base:'5'}} ml={{base:'5'}} borderRadius={10}>
                            <p>City : {weatherData.name}</p>
                            <p>Sunrise : {weatherData.sys?.sunrise}</p>
                            <p>Sunset : {weatherData.sys?.sunset}</p>
                            <p>Wind Pressure : {weatherData.main?.pressure} pa</p>
                            <p>Humidity : {weatherData.main?.humidity}</p>
                            <p>Temperature  : {weatherData.main?.temp} C</p>
                            <p>Minimum Temperature : {weatherData.main?.temp_min} C</p>
                            <p>Maximum Temperature : {weatherData.main?.temp_max} C</p>
                            <p>Wind Speed : {weatherData.wind?.speed}</p>
                            <p>Clouds  : {weatherData.clouds?.all}</p>
                        </Box>
                        <Box mt={{base:'5'}} ml={{base:'10'}} >
                            <iframe border={"solid #ff0ed7"} color={"#ff0ed7"} fontWeight={"bold"}  textAlign={"left"} paddingTop={5}  marginTop={40} height={300} width={{base:'sm',md:'400px'}} borderRadius={10} src={`https://www.google.com/maps/embed/v1/place?q=${weatherData.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`} title="Map"></iframe>
                        </Box>   
                    </Flex> 
                </Box>
                </Center>
            ):("")
        }
        <Center>
        <Flex direction={{base:'column',md:'row'}} width={{base:"sm",md:'80%'}}  marginTop={50} >
            {
                foreCast.map((el)=>(
                    <Box style={{border:"1px solid red", borderRadius:10,backgroundColor:"#10a310", fontWeight:"bold",marginLeft:"20px",marginTop:'20px'}} pl={5}>
                        <Text>{Date(el.dt*1000)}</Text>
                        <Image src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt="" />
                        <Text>Day Temp : {el.temp.day.toFixed(0)}C</Text>
                        <Text>Night Temp : {el.temp.night.toFixed(0)}C</Text>
                    </Box>
                ))
            }
        </Flex> 
        </Center>                
         {
            error?<Box>
                <Heading>Cant Find The details of the city/ Enter The Proper City Name</Heading>
            </Box>
            :("")
         }
    </Box>
    
  )
}

export default Weather