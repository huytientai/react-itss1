import React, { Component } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { CaretRightOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import './SongIcon.css';

const { Meta } = Card;

class SongIcon extends Component {
    constructor() {
        super();
        this.state = {
            like: <HeartOutlined />,
            like_status: false
        };
    }

    changeHeart = (event) => {
        console.log(this.state.like)
        if (this.state.like_status === false) {
            console.log('Liked');
            this.setState({
                like: <HeartFilled />,
                like_status: true
            });
        }
        else if (this.state.like_status === true) {
            console.log('Unliked');
            this.setState({
                like: <HeartOutlined />,
                like_status: false
            });
        }
    }

    render() {
        return (
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img className="AlbumImage" alt="cover" src={this.props.cover} />}
            >
                <Meta title={this.props.name} description={this.props.description} />

                <Button
                    style={{ borderColor: "black" }}
                    onClick={this.changeHeart}
                    icon={this.state.like}
                />
                <Button
                    style={{ borderColor: "black" }}
                    icon={<CaretRightOutlined />}
                    onClick={this.props.onClick}
                />
            </Card>
        )
    }
}

export default SongIcon;