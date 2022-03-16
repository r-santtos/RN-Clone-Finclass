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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/** COMPONENT FIN CLASSES */}
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.boxLeft}>
            <View style={styles.icon} />
            <Text style={[styles.txt, styles.title]}>
              Fin<Text style={[styles.txt, {color: '#43e4de'}]}>classes</Text>
            </Text>
          </View>

          <View style={styles.boxRight}>
            <Text style={[styles.txt, styles.links]}>ver todos</Text>
            <MaterialIcons name="arrow-forward-ios" size={14} color="#fff" />
          </View>
        </View>

        <FinClasses />
      </View>

      {/** COMPONENT FIN DOCS */}
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.boxLeft}>
            <View style={styles.icon} />
            <Text style={[styles.txt, styles.title]}>
              Fin<Text style={[styles.txt, {color: '#43e4de'}]}>docs</Text>
            </Text>
          </View>

          <View style={styles.boxRight}>
            <Text style={[styles.txt, styles.links]}>ver todos</Text>
            <MaterialIcons name="arrow-forward-ios" size={14} color="#fff" />
          </View>
        </View>

        <FinDocs />
      </View>

      {/** COMPONENT FIN BOOKS */}
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.boxLeft}>
            <View style={[styles.icon, {borderRadius: 8}]} />
            <Text style={[styles.txt, styles.title]}>
              Fin<Text style={[styles.txt, {color: '#43e4de'}]}>books</Text>
            </Text>
          </View>

          <View style={styles.boxRight}>
            <Text style={[styles.txt, styles.links]}>ver todos</Text>
            <MaterialIcons name="arrow-forward-ios" size={14} color="#fff" />
          </View>
        </View>

        <FinBooks />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txt: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff'
  },
  card: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  boxLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    borderRadius: 16,
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginLeft: -6
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 25/2,
    borderWidth: 3,
    borderColor: '#43e4de'
  },
  boxRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  links: {
    marginTop: -4,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default Dashboard;