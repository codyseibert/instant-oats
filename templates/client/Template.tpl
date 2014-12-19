<div ng-repeat="{{name_single}} in {{name}}">
    <div ng-hide="{{name_single}}.isEditMode"
            ng-click="edit({{name_single}})">
        {{#members}}
        {{=<% %>=}}{{<%={{ }}=%>{{name_single}}.{{name}}{{=<% %>=}}}}<%={{ }}=%>
        {{/members}}
        <span ng-click="delete{{name_single_title}}({{name_single}})">X</span>
    </div>

    <div ng-show="{{name_single}}.isEditMode">
        {{#members}}
        {{^isPrimary}}<input ng-model="{{name_single}}.{{name}}"></input>{{/isPrimary}}
        {{/members}}
        <button ng-click="update{{name_single_title}}({{name_single}})">Update</button>
    </div>
</div>

Create:
<br>
{{#members}}
{{^isPrimary}}<input ng-model="{{name_single}}.{{name}}" placeholder="{{name}}"></input>{{/isPrimary}}
{{/members}}
<button ng-click="create{{name_single_title}}({{name_single}})">Create</button>
