import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FinClasses from "../../components/FinClasses";
import FinDocs from "../../components/FinDocs";
import FinBooks from "../../components/FinBooks";

type StackDashboard = {navigation: {navigate:Function}}

/** COMPONENT DASHBOARD */
const Dashboard: React.FC<StackDashboard> = ({navigation}) => {
  return (
    <ScrollView 
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      {/** COMPONENT FINCLASSES */}
      <View style={styles.header}>
        <View style={styles.containerLeft}>
          <View style={[styles.icon, {borderRadius: 25/2}]} />
          <Text style={[styles.txt, styles.title]}>
            Fin<Text style={{color: '#43e4de'}}> classes</Text>
          </Text>
        </View>

        <View style={styles.containerRight}>
          <View style={styles.links}>
            <Text style={[styles.txt, {marginRight: 8}]}>ver todos</Text>
            <MaterialIcons name="arrow-forward-ios" size={11} color="#fff" />
          </View>
        </View>
      </View>
      <FinClasses />

      {/** COMPONENT FIN DOCS */}
      <View style={styles.header}>
        <View style={styles.containerLeft}>
          <View style={[styles.icon, {borderRadius: 25/2}]} />
          <Text style={[styles.txt, styles.title]}>
            Fin<Text style={{color: '#43e4de'}}> docs</Text>
          </Text>
        </View>

        <View style={styles.containerRight}>
          <View style={styles.links}>
            <Text style={[styles.txt, {marginRight: 8}]}>ver todos</Text>
            <MaterialIcons name="arrow-forward-ios" size={11} color="#fff" />
          </View>
        </View>
      </View>
      <FinDocs />

      {/** COMPONENT FIN BOOKS */}
      <View style={styles.header}>
        <View style={styles.containerLeft}>
          <View style={[styles.icon, {borderRadius: 8}]} />
          <Text style={[styles.txt, styles.title]}>
            Fin<Text style={{color: '#43e4de'}}> books</Text>
          </Text>
        </View>

        <View style={styles.containerRight}>
          <View style={styles.links}>
            <Text style={[styles.txt, {marginRight: 8}]}>ver todos</Text>
            <MaterialIcons name="arrow-forward-ios" size={11} color="#fff" />
          </View>
        </View>
      </View>
      <FinBooks />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txt: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff'
  },

  /** HEADER */
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  containerRight: {

  },
  icon: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#43e4de'
  },
  title: {
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginLeft: -8,
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  }
})

export default Dashboard;