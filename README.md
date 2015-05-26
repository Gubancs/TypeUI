# typeui
This repository contains a TypeScript frontend framework for web applications based on HTML5.

<h3>Examples</h3>
<a href="http://typeui.elasticbeanstalk.com/:">http://typeui.elasticbeanstalk.com/</a>


<h3>Screenshot</h3>
<img src="https://github.com/Gubancs/TypeUI/blob/master/typeui-framework/src/main/webapp/screenshots/Screen%20Shot%202015-05-26%20at%2020.48.58.png?raw=true" width="500"></img>

```javascript
     /**
     * Start application
     * 
     * @param {Container} bodyContainer
     */
    onApplicationStart(bodyContainer: Container): void {
        var panel = new Panel(bodyContainer);
        panel.setIconClass("fa fa-user");
        panel.setTitle("User registration");

        var userForm = new UserForm(panel.getBody());
        
        //Create an example notification
        var notification = Notification.success(userForm);
        notification.setMessage("This is an example message");
        notification.setTitle("Information");
        notification.setClosable(true);
    }
```


<h4>Features</h4>
<ul>
<li>Platform and browser independent</li>
<li>Obejct oriented UI programming</li>
<li>Support bidirectional data binding between UI component and data model</li>
<li>Type safe programming language for client side applications provided by TypeScript language</li>
<li>Clean, responsive and user-friendly components</li>
<li>Easy to learn and easy to use.</li>
<li>Customizable</li>
</ul>

<h4>What's New in version 0.2.0</h4>
<ul>
  <li>New components: Notification</li>
</ul>

<h4>What's New in version 0.1.0</h4>
<ul>
  <li>I created the first implementation of the Component hierachy with rendering</li>
  <li>I created the base UI form components, TextField, Textarea, DateField, Checkbox etc.</li>
  <li>I created the first version of the event-driven programing int TypeUI, like Observable base class.</li>
  <li>Imported 'FontAwesome' icon set, and in the future i would like to use it for the default icons.</li>
  <li>Support HTML5 placeholder text for all components which inherit the TextField class</li>
  <li>Created a theme and added minimal design for the all components</li>
  <li>Created StateProvider and StateManager for stateful components</li>
  <li>Added common utilities and base classes like HashMap, DOMHelper, Device and so on.</li>
  <li>Created build flow via maven 3</li>
</ul>
