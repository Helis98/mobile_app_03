import 'package:flutter/material.dart';
import 'package:flutter_login/flutter_login.dart';

const users = const {
  'masonbenell@knights.ucf.edu': '12345',
  'hunter@gmail.com': 'hunter',
};

void main() => runApp(MyApp());

/// This Widget is the main application widget.
class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.deepOrange,
      ),
      home: LoginPage(),
    );
  }
}

/// Login page Widget
class LoginPage extends StatelessWidget{
  Duration get loginTime => Duration(milliseconds: 2250);

  Future<String> _authUser(LoginData data) {
    print('Name: ${data.name}, Password: ${data.password}');
    return Future.delayed(loginTime).then((_) {
      if (!users.containsKey(data.name)) {
        return 'Username not exists';
      }
      if (users[data.name] != data.password) {
        return 'Password does not match';
      }
      return null;
    });
  }

  Future<String> _recoverPassword(String name) {
    print('Name: $name');
    return Future.delayed(loginTime).then((_) {
      if (!users.containsKey(name)) {
        return 'Username not exists';
      }
      return null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return FlutterLogin(
      title: 'SANA',
      logo: 'assets/images/sanalogo.png',
      onLogin: _authUser,
      onSignup: _authUser,
      onSubmitAnimationCompleted: () {
        Navigator.of(context).pushReplacement(MaterialPageRoute(
          builder: (context) => MyStatelessWidget(),
        ));
      },
      onRecoverPassword: _recoverPassword,
    );
  }
}

/// Home screen Widget
class MyStatelessWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState(){
    return PageState();
  }
}

/// Widget that displays the TabBar
class PageState extends State<MyStatelessWidget> {
  int currentIndex = 0;
  final List<Widget> children = [
    PlaceholderWidget(Colors.white),
    PlaceholderWidget(Colors.deepOrange),
    PlaceholderWidget(Colors.green)
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Super Awesome Nutrition App'),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.settings),
            tooltip: 'Settings page',
            onPressed: () {
              openPage(context);
            },
          ),
        ],
      ),
      body: children[currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: currentIndex, // this will be set when a new tab is tapped
        items: [
          BottomNavigationBarItem(
            icon: new Icon(Icons.home),
            title: new Text('Home'),
          ),
          BottomNavigationBarItem(
            icon: new Icon(Icons.restaurant),
            title: new Text('Calorie Log'),
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.done),
              title: Text('Goals')
          )
        ],
      ),
    );
  }

  void onTabTapped(int index) {
    setState(() {
      currentIndex = index;
    });
  }
}

/// Widget that holds contents of tabs
class PlaceholderWidget extends StatelessWidget {
  final Color color;

  PlaceholderWidget(this.color);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color,
    );
  }
}

/// settings Widget
void openPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(
    builder: (BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: const Text('Settings'),
        ),
        body: const Center(
          child: Text(
            'This is the settings page',
            style: TextStyle(fontSize: 24),
          ),
        ),
      );
    },
  ));
}



/*
/// Login page Widget
class LoginPage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login Page Flutter Firebase"),
      ),
      body: Container(
        padding: EdgeInsets.all(20.0),
        child: Column(
          children: <Widget>[
            SizedBox(height: 20.0),    // <= NEW
            Text(
              'Login Information',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 20.0),   // <= NEW
            TextFormField(
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(labelText: "Email Address")),
            TextFormField(
                obscureText: true,
                decoration: InputDecoration(labelText: "Password")),
            SizedBox(height: 20.0),  // <= NEW
            RaisedButton(child: Text("LOGIN"), onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => MyStatelessWidget()),
            );}),
          ],
        ),
      ),
    );
  }
}*/
