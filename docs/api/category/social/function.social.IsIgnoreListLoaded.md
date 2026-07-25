# social.IsIgnoreListLoaded
Проверяет факт загрузки списка игнора.

## Описание

```lua
social.IsIgnoreListLoaded(): boolean
```

Функция возвращает состояние загрузки списка игнора.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если список игнора загружен, и `false` в противном случае.

## Примеры

### Проверка загрузки списка игнора
```lua
if social.IsIgnoreListLoaded() then
    -- Выполнение действий после загрузки списка
end
```

## Смотрите также

- [EVENT_AVATAR_IGNORE_LIST_LOADED](events.avatar#event-avatar-ignore-list-loaded)