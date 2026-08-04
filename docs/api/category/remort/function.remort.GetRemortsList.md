# remort.GetRemortsList

Возвращает список альтернативных персонажей, на которых может переключиться главный игрок.

## Описание

```lua
remort.GetRemortsList(): table
```

Функция возвращает индексированный с нуля список информации об альтернативных персонажах. Вызов функции допускается только после получения события `EVENT_REMORT_LIST_GAINED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - индексированный с 0 список информации об альтернативных персонажах. Каждая вложенная таблица содержит следующие поля:

- **`name`** (`WString`) - Имя персонажа.

- **`avatarServerId`** (`number`) - Серверный идентификатор персонажа.

- **`isActive`** (`boolean`) - Флаг, указывающий, является ли персонаж активным в данный момент.

- **`isPrimary`** (`boolean`) - Флаг, указывающий, является ли персонаж главным.

- **`level`** (`number`) - Уровень персонажа.

- **`sysClassName`** (`string` | `nil`) - Внутрисистемное имя класса персонажа, нелокализуемая строка.

- **`sysRaceName`** (`string` | `nil`) - Внутрисистемное имя расы персонажа, нелокализуемая строка.

## Примеры

### Получение и перебор списка альтернативных персонажей

```lua
if remort.CanGetRemortsList() then
    local remorts = remort.GetRemortsList()
    for i = 0, GetTableSize( remorts ) - 1 do
        local remort = remorts[ i ]
        LogInfo( remort.name )
    end
end
```

## Смотрите также

- [EVENT_REMORT_LIST_GAINED](/api/events/events.EVENT_REMORT_.md#event-remort-list-gained)
- [remort.CanGetRemortsList](/api/category/remort/function.remort.CanGetRemortsList.md)