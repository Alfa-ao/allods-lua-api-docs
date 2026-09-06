---
outline: deep
---
# ResourceId

## Описание

Группа типов, являющихся идентификаторами ресурсов из базы. Один из пользовательских типов данных. Реализация каждого из типов данной группы - `userdata` с метатаблицей, соответствующей определенной категории ресурсов базы или `nil` (в случае отсутствия ресурса). Название типа и метатаблицы совпадают.

## Методы класса

- [ResourceId:GetInfo](/api/category/ResourceId/method.GetInfo.md) - возвращает информацию из файла ресурса.

- [ResourceId:GetPath](/api/category/ResourceId/method.GetPath.md) - возвращает путь к ресурсу.

- [ResourceId:GetInstanceId](/api/category/ResourceId/method.GetInstanceId.md) - возвращает уникальный идентификатор ресурса.

- [ResourceId:IsEqual](/api/category/ResourceId/method.IsEqual.md) - выполняет сравнение идентификаторов.




## Базовые типы ресурсов

### [AliasVisObjectId](/api/types/AliasVisObjectId.md)

Идентификатор визуального объекта-обвязки представляет ресурс объекта в базе. Служит для реализации автоматической подмены ресурсов (для коллекционных изданий и т.п.).

---

### [DecalObjectId](/api/types/DecalObjectId.md)

Идентификатор декола из базы.

---

### [Sound2DId](/api/types/Sound2DId.md)

Идентификатор звука из базы.

---

### [TextureId](/api/types/TextureId.md)

Идентификатор текстуры из базы.

---

### [UITextureId](/api/types/UITextureId.md)

Идентификатор интерфейсной текстуры.

---

### [VisActionId](/api/types/VisActionId.md)

Идентификатор визуального скрипта из базы.

---

### [VisObjectId](/api/types/VisObjectId.md)

Идентификатор визуального объекта из базы.

---




## Гейммеханические идентификаторы

::: info Config
Эти идентификаторы можно сохранять между сессиями.
:::

### [AbilityId](/api/types/AbilityId.md)

Идентификатор пассивного умения из базы.

---

### [ActionGroupId](/api/types/ActionGroupId.md)

Идентификатор группы заклинаний.

---

### [AstralSectorId](/api/types/AstralSectorId.md)

Идентификатор астрального сектора.

---

### [BattlegroundMarkId](/api/types/BattlegroundMarkId.md)

Команда в массовых сражениях.

---

### [BillingBonusId](/api/types/BillingBonusId.md)

Идентификатор платежного бонуса.

---

### [BuffId](/api/types/BuffId.md)

Идентификатор бафа, навешенного на игрока.

---

### [CharacterClassId](/api/types/CharacterClassId.md)

Идентификатор класса персонажа.

---

### [CharacterFormId](/api/types/CharacterFormId.md)

Идентификатор ресурса формы класса аватара игрока.

---

### [CombatTagId](/api/types/CombatTagId.md)

Идентификатор эффекта наложенного на игрока в бою.

---

### [ComponentPropertyId](/api/types/ComponentPropertyId.md)

Идентификатор компонента для крафтинга (в данный момент только алхимия).

---

### [CurrencyCategoryId](/api/types/CurrencyCategoryId.md)

Описание категории альтернативной игровой валюты.

---

### [CurrencyId](/api/types/CurrencyId.md)

Описание альтернативной игровой валюты.

---

### [FactionId](/api/types/FactionId.md)

Фракция.

---

### [ForgeCraftRecipeId](/api/types/ForgeCraftRecipeId.md)

Идентификатор рецепта forge крафта.

---

### [ForgeCraftResourceId](/api/types/ForgeCraftResourceId.md)

Идентификатор ресурса forge крафта.

---

### [GlossaryId](/api/types/GlossaryId.md)

Идентификатор универсального описателя.

---

### [GoalId](/api/types/GoalId.md)

Идентификатор цели.

---

### [InstancedEventCategoryId](/api/types/InstancedEventCategoryId.md)

Идентификатор ресурса категории сражения (инстанс-ивента).

---

### [InstancedEventResourceId](/api/types/InstancedEventResourceId.md)

Идентификатор сражения.

---

### [InterfaceMapMarkerId](/api/types/InterfaceMapMarkerId.md)

Идентификатор маркера карты интерфейса.

---

### [ItemCategoryId](/api/types/ItemCategoryId.md)

Идентификатор категории предмета.

---

### [ItemClassId](/api/types/ItemClassId.md)

Идентификатор класса предмета.

---

### [ItemId](/api/types/ItemId.md)

Идентификатор ресурса предмета в базе.

---

### [LfgDestinationCategoryId](/api/types/LfgDestinationCategoryId.md)

Идентификатор категории цели для LFG(сбора группы).

---

### [LfgDestinationId](/api/types/LfgDestinationId.md)

Идентификатор активности для LFG(сбора группы).

---

### [LifestyleCategoryId](/api/types/LifestyleCategoryId.md)

Категория гардероба.

---

### [LifestyleCollectionId](/api/types/LifestyleCollectionId.md)

Коллекция гардероба.

---

### [LootGroupId](/api/types/LootGroupId.md)

Вариант выбора лута, падающего на астральных островах.

---

### [MapModifierId](/api/types/MapModifierId.md)

Идентификатор модификатора карты.

---

### [MedalId](/api/types/MedalId.md)

Идентификатор ресурса достижения.

---

### [MedalRankId](/api/types/MedalRankId.md)

Идентификатор ресурса ранга достижения.

---

### [MountTalentId](/api/types/MountTalentId.md)

Идентификатор таланта маунта.

---

### [MountTalentGroupId](/api/types/MountTalentGroupId.md)

Идентификатор группы талантов маунта.

---

### [OrderBonusId](/api/types/OrderBonusId.md)

Идентификатор бонуса ордена.

---

### [PostTypeId](/api/types/PostTypeId.md)

Идентификатор раздела доски объявлений.

---

### [QuestId](/api/types/QuestId.md)

Идентификатор задания.

---

### [RecipeId](/api/types/RecipeId.md)

Идентификатор рецепта из базы.

---

### [ReforgeResourceId](/api/types/ReforgeResourceId.md)

Идентификатор ресурса (тира) для этого reforge-крафта.

---

### [RuleId](/api/types/RuleId.md)

Идентификатор ресурса переодического события.

---

### [ShipSkinId](/api/types/ShipSkinId.md)

Идентификатор скина корпуса корабля.

---

### [SkillId](/api/types/SkillId.md)

Идентификатор умения.

---

### [Sound2DId](/api/types/Sound2DId.md)

Идентификатор звука.

---

### [SpecialStatId](/api/types/SpecialStatId.md)

Идентификатор специальной характеристики.

---

### [SpellId](/api/types/SpellId.md)

Идентификатор заклинания (spell).

---

### [TeleportMasterId](/api/types/TeleportMasterId.md)

Идентификатор мастера телепорта.

---

### [TimeTableId](/api/types/TimeTableId.md)

Идентификатор таблицы с предустановленным списком времен/дат (как правило обозначают периодически повторяющиеся события).

---

### [TutorialCategoryId](/api/types/TutorialCategoryId.md)

Идентификатор ресурса категории обучения.

---

### [TutorialId](/api/types/TutorialId.md)

Идентификатор ресурса обучения.

---

### [UnlockCategoryId](/api/types/UnlockCategoryId.md)

Идентификатор категории анлоков.

---

### [UnlockId](/api/types/UnlockId.md)

Идентификатор ресурса возможности.

---

### [VariableId](/api/types/VariableId.md)

Идентификатор ресурса геймдизайнерской переменной.

---

### [VisualShipId](/api/types/VisualShipId.md)

Идентификатор корпуса корабля.

---

### [VoteId](/api/types/VoteId.md)

Идентификатор голосования.

---

### [WishmasterResourceId](/api/types/WishmasterResourceId.md)

Идентификатор ресурса исполнителя желаний.

---

### [ZodiacSignId](/api/types/ZodiacSignId.md)

Идентификатор знака зодиака.