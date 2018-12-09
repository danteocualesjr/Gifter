import React from 'React';
import { Card, Icon } from 'semantic-ui-react';

const AddGiftCtA = (props) => (
    <Card centered>
        <Card.Content textAlign="center">
            <Card.Header>Add new gift</Card.Header>
            <Link to="/gifts/new">    
                <Icon name="plus circle" size="massive" />
            </Link>
        </Card.Content>
    </Card>
);

export default AddGiftCtA;