import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { fetchData } from '../api/fetchData';
import { axiosData } from '../api/axiosData';

function Theme() {
    const [fetchResults, setFetchResults] = useState([]);
    const [axiosResults, setAxiosResults] = useState([]);

    useEffect(() => {
        fetchData().then(setFetchResults);
        axiosData().then(setAxiosResults);
    }, []);

    return (
        <ScrollView>
            <View>
                <Text>Theme Data</Text>
                <Text>Fetch Results:</Text>
                {fetchResults.map((item) => (
                    <Text key={item.API}>{item.Description}</Text>
                ))}
                <Text>Axios Results:</Text>
                {axiosResults.map((post) => (
                    <Text key={post.id}>{post.title}</Text>
                ))}
            </View>
        </ScrollView>
    );
}

export default Theme;
