# React Email Field Code Dample ⚛️ 🐜 ✉️
This is a code sample to illustrate the use of **React** with **TypeScript** and **Ant Design***. it is a simple email *"To:"* input with autocomplete and tags functionality.

To create this custom input the *Ant Design* [Select component](https://ant.design/components/select/) was levareged by combining *TypeScript* and *SFC React* components to it.

The idea is to grab a **JSON** (mocked response right now) that has a list of information from a user's contact list to create an autocomplete component.

In order to have a production quality component it would need to be done from scratch by using more basic *Ant Design* components, like a basic [Input component](https://ant.design/components/input/) or maybe levarage the [Autocomplete component](https://ant.design/components/auto-complete/). This to have full control over the functionality of the component.

## Improvements for this POC -
- Create a *"theme"* file that can be applied to *Ant Design*. See https://ant.design/docs/react/customize-theme
- Add a close button to the modal.
- Save draft emails (only recipients right now) in local storage.
- If the email to be added is not in the autocomplete list, then validate if the string has a valid email format.
- Create a function to debounce the data fetching.
- Add a loading indicator for when the data is being fetch.
- Make the *"profile_picture"* field optional.
- Add an image placeholder for when the user doesn't has one.
