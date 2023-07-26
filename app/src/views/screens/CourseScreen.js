import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';

const CourseScreen = ({ route }) => {
    const { data } = route.params;
    const BottomNavigationBar = () => {
        return <View style={{
            bottom: 0, height: 80, zIndex: 100,
            flexDirection: "row", alignItems: "center", paddingHorizontal: 20
        }}>
            <View style={{
                height: 60, width: 70,
                backgroundColor: "#FFEDEE", borderRadius: 30,
                justifyContent: "center", alignItems: "center", marginRight: 10
            }}>
                <Icon name='local-mall' style={{ color: "#FF6670", fontSize: 25 }} />
            </View>
            <View style={{
                height: 60, backgroundColor: "#6E8AFA",
                flex: 1, borderRadius: 30, justifyContent: "center", alignItems: "center"
            }}>
                <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>Buy Now</Text>
            </View>
        </View>
    }

    const CourseContentList = ({ content, index }) => {
        return <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row" }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: '#E4E7F4' }}>
                {'0' + (index + 1)}
            </Text>
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Text style={{
                    fontSize: 15, color: "#A0A5BD",
                    fontWeight: "500", marginBottom: 5
                }}>{content.time}</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{content.title}</Text>
            </View>
            <View style={{
                width: 40, height: 40, backgroundColor:
                    "#49CC96", borderRadius: 20, justifyContent: "center", alignItems: "center"
            }}>
                <Icon name='play-arrow' style={{ fontSize: 25, color: "#fff" }} />
            </View>
        </View>
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ImageBackground source={data.image}
                style={{
                    height: 400,
                    paddingTop: 40,
                    paddingRight: 20,
                    paddingLeft: 20
                }}>
                <Image resizeMode='contain' source={require('../../assets/bestseller.png')} style={{ width: 100, marginBottom: 10 }} />
                <Text style={{ fontSize: 25, fontWeight: "bold", top: -35 }}>Design Thinking</Text>
                <View style={{ top: -25, flexDirection: 'row' }}>

                    <View style={{ flexDirection: "row", marginRight: 10 }}>
                        <Icon name="people" size={25} style={{ color: "#61688B", }} />
                        <Text style={{ color: '#61688B', fontWeight: 'bold' }}>{data.students + 'k'}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Icon name='star' size={25} style={{ color: "#61688B", }} />
                        <Text style={{ color: "#61688B", fontWeight: "bold" }}>{data.star + 'k'}</Text>
                    </View>

                </View>
                <Text style={{ fontSize: 25, fontWeight: "bold", top: -10 }}>{'$' + data.price}</Text>

            </ImageBackground>
            <View style={{
                flex: 1, marginTop: -35, backgroundColor: "#fff",
                borderTopLeftRadius: 50, borderTopRightRadius: 50
            }}>
                <Text style={{
                    marginTop: 40,
                    marginBottom: 20, fontSize: 21, fontWeight: "bold",
                    marginHorizontal: 10
                }}>Course Content</Text>
                <FlatList showsVerticalScrollIndicator={false}
                    data={data.courseContent}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (<CourseContentList index={index}
                        content={item} />)}
                />
            </View>
            <BottomNavigationBar />
        </SafeAreaView>
    )
}

export default CourseScreen

const styles = StyleSheet.create({})