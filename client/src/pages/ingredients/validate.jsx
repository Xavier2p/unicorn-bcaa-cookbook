import IngredientView from './ingredient-view';
import API from '../../services/api';
import { useEffect, useState } from 'react';
import { Modal, Text, Grid, ScrollArea, Button, Center, Alert } from '@mantine/core';
import setNotification from '../errors/error-notification';
import { IconCheck } from '@tabler/icons-react';

const ModalValidateIngredients = ({ opened, handler, updater }) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        API.listIngredients()
            .then((res) => {
                if (res.status === 200) {
                    res.data = res.data.filter((ingredient) => ingredient.valid === false);
                    setIngredients(res.data);
                }
            })
            .catch((err) => {
                setNotification(true, err.response.data.error);
            });

        return () => {};
    }, []);

    const clickHandler = async (item) => {
        try {
            await API.validateIngredient({ _id: item._id });
            setIngredients(ingredients.filter((ing) => ing._id !== item._id));
            updater(item._id);
        } catch (error) {
            setNotification(true, error.response.data.error);
        }
    };

    return (
        <Modal.Root opened={opened} onClose={handler} size="lg">
            <Modal.Overlay />
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>
                        <Text fz="lg" fw={700}>
                            Validate ingredients
                        </Text>
                    </Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <ScrollArea h={500} offsetScrollbars>
                        <Grid columns={12}>
                            {ingredients.length === 0 ? (
                                <Grid.Col span={12}>
                                    <Center>
                                        <Alert icon={<IconCheck />} color="green" m="xl">
                                            All ingredients are validated !
                                        </Alert>
                                    </Center>
                                </Grid.Col>
                            ) : (
                                ingredients.map((ingredient) => (
                                    <Grid.Col span={6} key={ingredient._id}>
                                        <IngredientView
                                            item={ingredient}
                                            button={{
                                                clickHandler,
                                                text: 'Validate',
                                            }}
                                        />
                                    </Grid.Col>
                                ))
                            )}
                        </Grid>
                    </ScrollArea>
                    <Center mt="md">
                        <Button onClick={handler}>Close</Button>
                    </Center>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default ModalValidateIngredients;
