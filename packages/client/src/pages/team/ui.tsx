import React from 'react'
import {Card, Col, Row, Image, Typography, Button} from "antd";
import { team } from './const'
import Title from "antd/es/typography/Title";
import {TelegramIcon} from "pages/team/telegramIcon";
import Icon from "@ant-design/icons";

export const Team = () => {
    return (
        <Card>
            <Title
                level={2}
                style={{textAlign:'center'}}
            >
                Команда разработки
            </Title>
            <Row gutter={[8, 16]}>
                { team.map((person) => (
                    <Col span={8} key={person.id}>
                        <Card style={{textAlign: 'center'}}>
                            <Image
                                alt='Фото'
                                src={person.src}
                                style={{
                                    minHeight:250,
                                    borderRadius:10,
                                    objectFit: 'cover',
                                }}
                            />
                            <Title
                                level={4}
                                style={{textAlign:'center'}}
                            >
                                {person.name}
                            </Title>
                            <Typography.Text style={{ display: 'block', textAlign: 'center' }}>
                                <Button type="link"
                                        href={person.tg_href}
                                        icon={<Icon component={TelegramIcon}/>}>
                                   {person.tg}
                                </Button>
                            </Typography.Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Card>
    )
}
