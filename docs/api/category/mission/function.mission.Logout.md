# mission.Logout
Инициирует завершение миссии и переход в экран работы с персонажами.

## Описание
```lua
mission.Logout()
```
Функция инициирует завершение миссии и переход в экран работы с персонажей.

::: warning Замечание
Если игрок находится в бою, выход откладывается на некоторое время, и присылается событие `EVENT_AVATAR_WILL_BE_REMOVED`. При бездействии аватар уничтожается через некоторое время. Выход из миссии можно отменить вызовом `mission.CancelLogout()`, после чего присылается событие `EVENT_AVATAR_LOGOUT_CANCELLED`.
:::

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Завершение миссии
```lua
mission.Logout()
```

## Смотрите также
- [EVENT_AVATAR_WILL_BE_REMOVED](events.avatar#event-avatar-will-be-removed)
- [EVENT_AVATAR_LOGOUT_CANCELLED](events.avatar#event-avatar-logout-cancelled)
- [mission.CancelLogout](function.mission.CancelLogout)