import React, { Component } from 'react'
import { Modal, View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import commonStyles from '../commonStyles'
import DateTimePicker from '@react-native-community/datetimepicker'

const initialState = {
    desc:'', date: new Date()
}

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    getDateTimePicker = () => {
        return <DateTimePicker 
            value={this.state.date}
            onChange={(_, date) => this.setState({ date })}
            mode='date' />
    }


    render() {
        return(
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>

                <TouchableWithoutFeedback onPress={this.props.onCancel} >

                    <View style={styles.backgraund}>
                    </View>

                </TouchableWithoutFeedback>

                <View style={styles.conteiner}>
                    <Text style={styles.header}> Nova Tarefa</Text>

                    <TextInput style={styles.input}
                        placeholder="informe A Descrição :)"
                        onChangeText={desc => this.setState({desc})}
                        value={this.state.desc}/>
                    {this.getDateTimePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel} >
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback 
                    onPress={this.props.onCancel} >

                    <View style={styles.backgraund}>

                    </View>

                </TouchableWithoutFeedback>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    backgraund: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    conteiner: {
        backgroundColor:  '#FFF'
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today,
    },
})