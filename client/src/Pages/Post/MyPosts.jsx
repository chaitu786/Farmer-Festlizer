import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Show,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../../Components/Home/Farmers.css";
import { FcBiohazard } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import {
  Delete,
  Get_MyPosts_Data,
  PermenentDelete,
} from "../../Redux/AppReducer/Action";
import { useAlert } from "react-alert";

export const MyPosts = () => {
  const Posts_Data = useSelector((state) => state.Reducer.Posts);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(Get_MyPosts_Data(setLoading));
  }, [dispatch]);
  const handleCompleted = (Id) => {
    setLoading(true);
    dispatch(Delete(Id, alert, setLoading));
  };

  const handleDelete = (Id) => {
    setLoading(true);
    dispatch(PermenentDelete(Id, alert, setLoading));
  };
  return (
    <>
      {loading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="9999"
          backgroundColor="rgba(0, 0, 0, 0.3)"
        >
          <Spinner
            position="absolute"
            top="50%"
            speed="0.65s"
            emptyColor="gray.300"
            left="50%"
            transform="translate(-50%, -50%)"
            color="#CB3B7D"
            thickness="4px"
            size="xl"
          />
        </Box>
      )}
      <Box>
        <Stack>
          <Center>
            <Box>
              <FcBiohazard fontSize={"100px"} />
              <Text
                fontSize={{ base: "2xl", md: "3xl", lg: "3xl", xl: "3xl" }}
                fontStyle={"oblique"}
                color={{ base: "#397ec3", md: "#2cbcbc" }}
              >
                Your Posts
              </Text>
            </Box>
          </Center>
          <Flex flexDirection={"row"}>
            <Box
              style={{ height: "90vh", overflowY: "scroll" }}
              className="imagescroll"
            >
              {Posts_Data?.map((el) => (
                <Stack
                  direction={{
                    base: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  }}
                  width={{ base: "sm", md: "auto", lg: "auto", xl: "xl" }}
                  ml={{ base: "1", md: "16", lg: "16", xl: "16" }}
                  mt="5"
                  borderRadius={"20px"}
                  className="MainCartItem"
                >
                  <Box padding={{ base: "8" }}>
                    <Image
                      src={`https://farmer-backend.onrender.com/static/${el.Image_Url}`}
                      width={{ base: "sm", md: "auto", lg: "auto", xl: "auto" }}
                    ></Image>
                  </Box>
                  <Box padding={{ base: "8" }}>
                    <Text>{el.Title}</Text>
                    <Text>{el.Desc}</Text>
                    <ButtonsDiv
                      handleCompleted={handleCompleted}
                      Id={el._id}
                      handleDelete={handleDelete}
                    />
                  </Box>
                </Stack>
              ))}
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

const ButtonsDiv = ({ handleCompleted, Id, handleDelete }) => {
  return (
    <Box display={"flex"}>
      <Button
        leftIcon={<AiOutlineDelete fontSize={"20px"} />}
        width={{ base: "fit-content", md: "auto" }}
        overflow={"hidden"}
        onClick={() => handleDelete(Id)}
      >
        Delete
      </Button>
      <Button
        leftIcon={<BsBookmarkCheck fontSize={"20px"} />}
        w={{ base: "fit-content", md: "auto" }}
        overflow={"hidden"}
        ml={"10"}
        onClick={() => handleCompleted(Id)}
      >
        Completed
      </Button>
    </Box>
  );
};
