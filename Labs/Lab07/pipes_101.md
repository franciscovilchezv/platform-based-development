# Pipes

Pipes are function that you can use in your HTML in order to transform data. They are provided by Angular. The full list of pipes can be found in [Angular documentation](https://angular.io/guide/pipes).


One pipe that we can use is the [Date](https://angular.io/api/common/DatePipe) pipe. It allows you to transform a date to any format you want. Let's include it in our `members-table.component.html`

{% raw %}
```
...
    <td>{{item.birthday \| date}}</td>
...
```
{% endraw %}

You may remember the [json](https://angular.io/api/common/JsonPipe) pipe, which converts a Javascript Object (dictionary) into a JSON-string representation.
