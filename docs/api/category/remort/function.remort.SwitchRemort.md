# remort.SwitchRemort

Переключает на другого альтернативного персонажа.

## Описание

```lua
remort.SwitchRemort( name: WString, anonymous: boolean )
```

Вызов функции возможен только после получения события `EVENT_REMORT_LIST_GAINED`.

## Список параметров

- **`name`** (`WString`) - Имя персонажа.

- **`anonymous`** (`boolean`) - Флаг анонимного переключения. Значение `true` указывает на необходимость анонимного переключения.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Переключение на неактивного персонажа

```lua
if remort.CanGetRemortsList() then
    local remorts = remort.GetRemortsList()
    local remortInfo = remorts[ 0 ]
    if remortInfo and not remortInfo.isActive then
        remort.SwitchRemort( remortInfo.name, false )
    end
end
```

::: info Описание примера
В примере проверяется возможность получения списка альтернативных персонажей. Если список доступен, извлекается первый элемент массива. При условии, что информация о персонаже существует и он не является активным, инициируется переключение на него без анонимного режима.
:::

## Смотрите также

- [EVENT_REMORT_LIST_GAINED](events.remort#event-remort-list-gained)
- [remort.CanGetRemortsList](function.remort.CanGetRemortsList)
- [remort.GetRemortsList](function.remort.GetRemortsList)