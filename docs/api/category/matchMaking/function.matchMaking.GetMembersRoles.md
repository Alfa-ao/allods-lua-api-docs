# matchMaking.GetMembersRoles
Извлекает информацию о текущих боевых ролях персонажей в группе.

## Описание
```lua
matchMaking.GetMembersRoles( eventId: ObjectId | nil ): table
```
Функция анализирует состав группы и возвращает список участников с указанием их текущих боевых ролей для заданной или текущей активности.

## Список параметров
- **`eventId`** (`ObjectId` | `nil`) - Идентификатор активности, в которую собирается группа. Значение `nil` указывает на необходимость получения ролей в текущей активности игрока.

## Возвращаемые значения
Возвращает `table` - список участников группы, каждый элемент которого содержит следующие поля:

- **`id`** (`ObjectId` | `nil`) - Идентификатор аватара, если доступен.

- **`role`** (`number`(`ENUM_LFGRole`)) - Роль в группе.

## Примеры
### Получение ролей в текущей активности
```lua
local rolesInfo = matchMaking.GetMembersRoles()
```

## Смотрите также
- [ENUM_LFGRole](ENUM_LFGRole)
- [EVENT_MATCH_MAKING_MEMBERS_ROLES_CHANGED](EVENT_MATCH_MAKING_MEMBERS_ROLES_CHANGED)