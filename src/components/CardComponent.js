import { Button, ButtonGroup,Image, Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Center } from "@chakra-ui/react";
import { px } from "framer-motion";

const CardComponent = ({propText, propImage, propName}) => {
    return (
        <Card maxW='sm' margin={10}>
        <CardBody>
            <Image margin={"0"}
            src={propImage}
            borderRadius='lg'
            />
            <Stack mt='3' spacing='1'>
            <Heading size='md'>{propName}</Heading>
            <Text>
                Name Kanji: {propText}
            </Text>
            <Text color='blue.600' fontSize='2x0'>
                $450
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    )
}
export default CardComponent;