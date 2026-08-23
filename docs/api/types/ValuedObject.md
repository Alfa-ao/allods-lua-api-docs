# ValuedObject

`ValuedObject` - это обёртка игрового объекта для подстановки в `ValuedText`. Представляет собой специальный вариант `userdata` и имеет несколько методов.

::: info Получение экземпляра
Для получения экземпляра `ValuedObject` нужно пользоваться специальными функциями вида `Get...ValuedObject( object )` (например, `itemLib.GetValuedObject`, `avatar.GetBuffValuedObject` и т.д.).
:::

`ValuedObject` возвращает текст и изображение, которыми обёртываемый объект может быть представлен в виджете. Так как типов объектов много, `ValuedObject` содержит информацию о типе объекта и его идентификаторе. Типы идентификаторов могут быть разными для различных типов объектов.

## Типы объектов и идентификаторы

| Тип объекта | Enum (`obj:GetType()`) | Тип / значение идентификатора (`obj:GetId()`) |
| :--- | :--- | :--- |
| Неизвестен (тестовый) | `VAL_OBJ_TYPE_UNKNOWN` | - |
| Предмет | `VAL_OBJ_TYPE_ITEM` | `ObjectId` / идентификатор предмета |
| Заклинание | `VAL_OBJ_TYPE_SPELL` | `SpellId` / идентификатор ресурса заклинания |
| Баф | `VAL_OBJ_TYPE_BUFF` | `BuffId` / идентификатор ресурса бафа |
| Умение | `VAL_OBJ_TYPE_ABILITY` | `AbilityId` / идентификатор ресурса умения |
| Существо | `VAL_OBJ_TYPE_CREATURE` | `WString` / имя существа |
| Игрок | `VAL_OBJ_TYPE_PLAYER` | `UniqueId` / уникальный идентификатор персонажа |
| Маунт | `VAL_OBJ_TYPE_MOUNT` | `ObjectId` / идентификатор маунта |
| Игровая валюта | `VAL_OBJ_TYPE_CURRENCY` | `CurrencyId` / идентификатор игровой валюты |
| Достижение | `VAL_OBJ_TYPE_MEDAL` | `ObjectId` / идентификатор достижения |
| Раздел доски объявлений | `VAL_OBJ_TYPE_POST_TYPE` | `PostTypeId` / идентификатор ресурса раздела |
| Произвольная lua-таблица | `VAL_OBJ_TYPE_TABLE` | `table` |
| Зона карты | `VAL_OBJ_TYPE_ZONE` | - |
| Анлок | `VAL_OBJ_TYPE_UNLOCK` | - |
| Модификатор карты | `VAL_OBJ_TYPE_MAP_MODIFIER` | `MapModifierId` / идентификатор ресурса модификатора |
| Скилл (умение) | `VAL_OBJ_TYPE_SKILL` | `SkillId` / идентификатор ресурса скилла |
| Продукция рога изобилия | `VAL_OBJ_TYPE_STRONGHOLD_PRODUCTION_SETTINGS` | `ProductionSettings` / описание производимого "рогом" |
| Лига личного аллода | `VAL_OBJ_TYPE_STRONGHOLD_CATEGORY` | `StrongholdCategory` / идентификатор ресурса категории |

::: tip Взаимодействие с мышью
`ValuedObject` умеет реагировать на мышиные клики.

Чтобы клик проходил только в объекты, а не целиком в контролы, используется флаг `pickObjectsOnly`, определенный для `TextView` и `TextContainer`. Также необходимо использовать флаг `pickChildrenOnly`, чтобы сообщения не блокировались другими контролами и служебными элементами.
:::

## Перечисления (Константы)

<!--@include: @/api/constants/constants.VAL_OBJ_TYPE_.md{5,32}-->