import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';

export default class SearchBarComponent extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={{ width: "100%" }}>
                <SearchBar
                    placeholder="Buscar..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        );
    }
}