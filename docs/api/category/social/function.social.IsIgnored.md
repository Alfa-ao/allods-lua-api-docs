# social.IsIgnored
Проверяет, находится ли персонаж в списке игнора аватара.

## Описание
```lua
social.IsIgnored( player: ObjectId | wstring ): boolean
```
Функция проверяет наличие указанного юнита в списке игнора аватара.

::: warning Замечание
Некоторое время после входа в мир результат может быть ложноотрицательным, см. `social.IsIgnoreListLoaded`.
:::

## Список параметров
- **`player`** (`ObjectId` | `wstring`) - Идентификатор или имя юнита.

## Возвращаемые значения
Возвращает `boolean` - `true`, если персонаж находится в списке игнора.

## Примеры
### Проверка цели на наличие в списке игнора
```lua
if social.IsIgnored( avatar.GetTarget() ) then
    LogInfo( "Ignored player tageted" )
end
```

## Смотрите также
- [social.IsIgnoreListLoaded](function.social.IsIgnoreListLoaded)