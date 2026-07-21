# hangar.Rename

Изменяет имя транспортного средства.

## Описание

```lua
hangar.Rename( name: WString )
```

Функция отправляет запрос на изменение имени транспортного средства. В ответ присылается событие `EVENT_TRANSPORT_RENAME_REPLY_RESULT`. В случае, если переименовать транспорт не удалось, приходит событие `EVENT_GENERAL_ERROR` с причиной ошибки.

## Список параметров

- **`name`** (`WString`) - Желаемое имя транспорта.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Переименование транспортного средства

```lua
hangar.Rename( name )
```

## Смотрите также

- [EVENT_TRANSPORT_RENAME_REPLY_RESULT](events.transport#event-transport-rename-reply-result)
- [EVENT_GENERAL_ERROR](events.general#event-general-error)