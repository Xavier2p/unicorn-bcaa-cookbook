import  Logo from '../../assets/logo_cookbook.png';
import { Avatar, Center, Text, TextInput, ActionIcon, useMantineTheme, Title } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

const InputWithButton = (props) => (
    <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        rightSection={
            <ActionIcon size={32} radius="xl" color={useMantineTheme().primaryColor} variant="filled">
                <IconArrowRight size="1.1rem" stroke={1.5} />
            </ActionIcon>
        }
        placeholder="Search Recipes"
        rightSectionWidth={42}
        {...props}
    />
);

const Home = () => (
    <>  <Center mt="xl" mb="md">
            <Avatar src={Logo} size={300} />
        </Center>
        <Text align="center" fw={500} fz="xl">
            Share and discover recipes!
        </Text>
        <Center my={20}>
            <InputWithButton style={{ width: '50%' }} action={() => console.log("k")} />
        </Center>
    </>
);

export default Home;
