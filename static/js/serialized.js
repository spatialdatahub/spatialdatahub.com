(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
  Rewriting the main js file to deal with serialized data instead of pulling it from html elements
  */

/*
const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
let linkDatasetColorCounter = 0 // this is for the datasets from the links

const datasetLinksNodeList = document.getElementsByName('dataset')
const datasetLinks = Array.prototype.slice.call(datasetLinksNodeList)
const datasets = {}
const datasetClusters = {}
const activeDatasetButtons = []
let layerClusterState = 0

dataset links for each
  const pk = link.id
  const ext = link.getAttribute('value') // I have to use this because 'value' is a loaded arguement
  const url = mapFunctions.returnCorrectUrl(link, pk)

  leaflet map
  enter keycode
  
It looks like I need dataset primary keys, slugs, urls, ext 

  */

var makeElement = function makeElement(element, cls, id) {
  var el = document.createElement(element);
  el.setAttribute('class', cls);
  el.setAttribute('id', id);
  return el;
};

// instead of using django template to create the html elements use javascript
// this is basically what react does... do i need react? I don't want to add
// that much js to this project.

// main container
// js_mount

// top bar with functional buttons
// div

// buttons

// main map container
// create map container with classes and id and a placeholder text element
var mapContainerJS = makeElement('div', 'col-xs-12 col-md-8 col-lg-9', 'mapContainerJS');
var mapContainerPlaceholder = document.createTextNode('Map Here');

// sidebar 
// create sidebar container for datasets
var datasetsContainerJS = makeElement('div', 'col-xs-12 col-md-4 col-lg-3', 'datasetsContainerJS');

// container with searchbox and clear map button in sidebar
var searchBarClearMapUl = makeElement('ul', 'nav nav-pils nav-stacked', 'searchBarClearMapUl');

// search bar
var searchBarLi = makeElement('li', 'searchBarLi', 'searchBarLi');

// make the form that goes into the searchBarLi
var searchBarForm = document.createElement('form');
searchBarForm.setAttribute('action', '.');
searchBarForm.setAttribute('method', 'GET');

// make the input that will go into the searchBarform
var searchBarFormInput = document.createElement('input');
searchBarFormInput.setAttribute('class', 'form-control');
searchBarFormInput.setAttribute('name', 'q');
searchBarFormInput.setAttribute('type', 'text');
searchBarFormInput.setAttribute('title', 'Search Datasets');
searchBarFormInput.setAttribute('placeholder', 'Search title, account, author, keyword');

// make the clear map button
// make li
var clearMapLi = makeElement('li', 'clearMapLi', 'clearMapLi');
// make button
var clearMapButton = makeElement('button', 'btn btn-default btn-block', 'clear_map');
/* make textNode */
var clearMapButtonText = document.createTextNode('Clear Map');

// puting it all together
// append the map container to js_mount
js_mount.appendChild(mapContainerJS);
// append the mapContainerPlaceholder to the mapContainer
mapContainerJS.appendChild(mapContainerPlaceholder);

// append the sidebar to js_mount
js_mount.appendChild(datasetsContainerJS);
// append the searchBarClearMapUl to the datasetsContainer
datasetsContainerJS.appendChild(searchBarClearMapUl);

// append the searchBarLi to the searchBarUl
searchBarClearMapUl.appendChild(searchBarLi);
// append the searchBarForm to the searchBarLi
searchBarLi.appendChild(searchBarForm);
// append the searchBarFormInput to the searchBarForm
searchBarForm.appendChild(searchBarFormInput);

// append the clearMapButtonLi to the sidebar
searchBarClearMapUl.appendChild(clearMapLi);
// append the clearMapButton to the clearMapButtonLi
clearMapLi.appendChild(clearMapButton);
// append the clearMapButtonText to the clearMapButton
clearMapButton.appendChild(clearMapButtonText);

/* add data to map buttons in side bar */
/* container for map buttons and dataset page links in side bar */

/* dataset has password */
/*
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default"
      name="dataset" id="pk" value="ext">
        dataset.title
    </button>
  </div>
*/

/* dataset does not have password */
/*
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default"
      name="dataset" id="pk" value="ext" url="url">
        dataset.title
    </button>
  </div>
*/

/* dataset page links in side bar */

/* map container */

/* map */

//console.log(json_data);
json_data.map(function (dataset) {
  return console.log(dataset);
});

var datasetButtons = json_data.map(function (dataset) {
  // make the justified button group div
  var justifiedButtonGroup = makeElement('div', 'btn-group btn-group-justified', 'justifiedButtonGroup' + dataset.pk);
  justifiedButtonGroup.setAttribute('role', 'group');

  // make the button group div
  var buttonGroup = makeElement('div', 'btn-group', 'buttonGroup' + dataset.pk);
  buttonGroup.setAttribute('role', 'group');

  // make the button for the dataset
  // a lot of this will change with refactorin
  var button = makeElement('button', 'btn btn-default', 'button' + dataset.pk);
  button.setAttribute('type', 'button');
  button.setAttribute('name', 'dataset'); // is this necessary?
  button.setAttribute('value', '' + dataset.fields.ext); // is this necessary?
  button.setAttribute('url', '' + dataset.fields.url); // is this necessary?

  // make the text node for the button for the dataset
  var buttonText = document.createTextNode('' + dataset.fields.title);

  // make the button group div for the link to the dataset page
  var datasetLinkButtonGroup = makeElement('div', 'btn-group', 'datasetLinkButtonGroup' + dataset.pk);

  // make the link to the dataset page
  var datasetLink = makeElement('a', 'btn', 'datasetLink' + dataset.pk);
  datasetLink.setAttribute('href', '/' + dataset.fields.account_slug + '/' + dataset.fields.dataset_slug + '/' + dataset.fields.pk);

  // make the text for the link to the dataset page
  document.createTextNode('Dataset Page');

  // put it all together
  justifiedButtonGroup.appendChild(buttonGroup);
  buttonGroup.appendChild(button);
  button.appendChild(buttonText);

  // return as array of divs
  return justifiedButtonGroup;
});

datasetButtons.forEach(function (datasetButton) {
  return console.log(datasetButton);
});

// create button groups for each json_data item

},{}]},{},[1]);
