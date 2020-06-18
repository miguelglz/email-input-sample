# React Email Field Code Sample ⚛️ 🐜 ✉️
This is a code sample to illustrate the use of **React** with **TypeScript** and **Ant Design**. it is a simple email *"To:"* input with autocomplete and tags functionality.

![alt text](https://i.imgur.com/yMcjLvm.png)

To create this custom input the *Ant Design* [Select component](https://ant.design/components/select/) was levareged by combining *TypeScript* and *SFC React* components to it.

The idea is to grab a **JSON** (mocked response right now) that has a list of information from a user's contact list to create an autocomplete component.

In order to have a production quality component it would need to be done from scratch by using more basic *Ant Design* components, like a basic [Input component](https://ant.design/components/input/) or maybe levarage the [Autocomplete component](https://ant.design/components/auto-complete/). This to have full control over the functionality of the component.

## Improvements for this POC :shipit:
- Create a *"theme"* file that can be applied to *Ant Design*. See https://ant.design/docs/react/customize-theme
- Add a close button to the modal.
- Save draft emails (only recipients right now) in local storage.
- If the email to be added is not in the autocomplete list, then validate if the string has a valid email format.
- Handle placeholder style with [Radium](https://github.com/FormidableLabs/radium/tree/master/docs/api#style-component) to push it farther to the left than the typing indicator.
- Calculate input left padding depending on the *onFocus* placeholder
- Create a function to debounce the data fetching.
- Add a loading indicator for when the data is being fetch.
- Make the *"profile_picture"* field optional.
- Handle non-square and smaller than 50px profile images. Probably center them and fill the container.
- Add an image placeholder to use when the user doesn't has one.
- Move the event handler funtion in the dataLayer to the utils file.
- Document the event handler funtions.
- Lint with [standardJS](https://standardjs.com/)
- Add unit tests
