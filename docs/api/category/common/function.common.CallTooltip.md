# common.CallTooltip
Управляет отображением системного тултипа (всплывающего описания).

## Описание
```lua
common.CallTooltip( isActive: boolean, tooltipData: table | nil )
```
Функция управляет отображением системного тултипа (всплывающего описания). При передаче `true` в параметре `isActive` инициируется показ тултипа на основе данных из таблицы `tooltipData`. При передаче `false` активный тултип скрывается.

::: details Описание tooltipData
> [!WARNING]
> Таблица параметров, передаваемая при `isActive == true`.

**Обязательные поля:**

- **`tooltip`** (`number`) — тип тултипа, подробнее смотри в разделе `TOOLTIP_*`
- Обязательные поля конкретного типа (подробнее в разделе `Типы тултипов`).

**Опциональные поля:**

- **`tooltipLocker`** (`boolean`) `false` — принудительно разрешает блокировку тултипа. По умолчанию блокировка разрешена для некоторых типов тултипов и тултипов, содержащих активные ссылки.

- **`tooltipNoDelay`** (`boolean`) `false` — отображает тултип без задержки. По умолчанию задержка составляет 300 мс. Используется только при обновлении существующего тултипа.

- **`forceHideCompare`** (`boolean`) `false` — отключает вычисление и отображение дополнительных тултипов сравнения.

- **`customCompare`** (`table`) — таблица с описателями дополнительных тултипов (индексация от 1). Порядок отображения: сверху вниз.

- **`rect`** (`table`) — `WidgetRect` виджет привязки тултипа (подробнее в разделе `Позиционирование тултипа`).

- **`shortcut`** (`table`) — `tooltipShortcutData` таблица параметров шортката (подробнее в разделе `Описание tooltipShortcutData`).

- **`number`** (`table`) — таблица, описывающая кастомный элемент тултипа (подробнее в разделе `Компоненты тултипа`).

- Опциональные поля конкретного типа (подробнее в разделе `Типы тултипов`).
:::

::: details Описание tooltipShortcutData
Специальная таблица, описывающая подсказки для действий мышью или нажатия кнопки клавиатуры. Порядок отображения мышиных действий (если задано более одного) соответствует порядку в описании. Клавиатурное действие может быть задано только одно и отображается последним.

**Поля таблицы (все являются опциональными):**
- **`LMB`** (`table(ValuedText:SetTextValues)`) — описание для клика левой кнопкой мыши.
- **`LMBDOUBLE`** (`table(ValuedText:SetTextValues)`) — описание для двойного клика левой кнопкой мыши.
- **`RMB`** (`table(ValuedText:SetTextValues)`) — описание для клика правой кнопкой мыши.
- **`MMB`** (`table(ValuedText:SetTextValues)`) — описание для клика колесиком мыши.
- **`LMBALT`** (`table(ValuedText:SetTextValues)`) — описание для клика левой кнопкой мыши с зажатым Alt.
- **`LMBSHIFT`** (`table(ValuedText:SetTextValues)`) — описание для клика левой кнопкой мыши с зажатым Shift.
- **`LMBCTRL`** (`table(ValuedText:SetTextValues)`) — описание для клика левой кнопкой мыши с зажатым Ctrl.
- **`RMBALT`** (`table(ValuedText:SetTextValues)`) — описание для клика правой кнопкой мыши с зажатым Alt.
- **`RMBCTRL`** (`table(ValuedText:SetTextValues)`) — описание для клика правой кнопкой мыши с зажатым Ctrl.
- **`RMBSHIFT`** (`table(ValuedText:SetTextValues)`) — описание для клика правой кнопкой мыши с зажатым Shift.
- **`LMBDRAG`** (`table(ValuedText:SetTextValues)`) — описание для Drag&Drop.
- **`LRMB`** (`table(ValuedText:SetTextValues)`) — описание для зажатия левой и правой кнопок мыши.
- **`sysSectionName`** (`string`) — имя секции клавиатурной реакции.
- **`sysBindName`** (`string`) — имя бинда клавиатурной реакции.
:::

::: details Правила сборки тултипа {open}
- Если в тултипе отсутствуют кастомные компоненты и задан шаблон, сборка производится по шаблону.
- Если в тултипе задан шаблон `TOOLTIP_NONE` и присутствуют кастомные компоненты, сборка производится из кастомных компонентов в порядке индексов.
- Если имеются и шаблон, и кастомные компоненты, шаблон резолвится в индексы и объединяется с кастомными компонентами.

Логика сборки в коде:
```lua
local content = GetTemplateContent( params )
local customContent = GetCustomContent( params )
if customContent then
    local order = {}
    for id, entry in pairs( customContent ) do
        table.insert( order, id )
    end
    table.sort( order )

    local contentLen = #content

    for _, id in ipairs( order ) do
        if id > contentLen then
            table.insert( content, customContent[ id ] )
        elseif not content[ id ] or not content[ id ][ 1 ] then
            content[ id ] = customContent[ id ]
        else
            table.insert( content, id, customContent[ id ] )
        end
    end
end
```
:::

::: details Позиционирование тултипа
Для позиционирования тултипа может быть передана таблица `WidgetRect` (результат `WidgetSafe:GetRealRect()`) для привязки к конкретному виджету. Если `rect` не передан, тултип располагается в правой нижней части экрана.

**Основной тултип** алгоритм пытается разместить:
- **По X:**
  + Справа (левая граница тултипа совпадает с правой границей виджета) `ИЛИ`
  + Слева (правая граница тултипа совпадает с левой границей виджета) — без проверки границ.
- **По Y:**
  + Снизу (верхние границы тултипа и виджета совпадают) `ИЛИ`
  + Сверху (нижние границы тултипа и виджета совпадают) `ИЛИ`
  + По центру экрана (таргет игнорируется) — без проверки границ.

**Дополнительные тултипы (тултипы сравнения)** всегда склеиваются в стопку. Алгоритм пытается разместить стопку:
- **По X:**
  + Обязательно формируется цепочка 
  
    `[таргет | основной тултип | стопка дополнительных тултипов]`. 
    
    Приоритетно слева направо, но в случае выхода за границы экрана — справа налево (без проверки границ). 
    
    Основной тултип при этом может быть перепозиционирован по X.
- **По Y:**
  + Верхние границы основного и стопки дополнительных тултипов совпадают `ИЛИ`
  + Нижние границы совпадают `ИЛИ`
  + По центру экрана (положение основного тултипа игнорируется) — без проверки границ.
:::

::: details Типы тултипов
Для каждого типа тултипа определяются специфичные параметры. 
Параметры без квадратных скобок являются обязательными, со скобками — опциональными. 
> [!IMPORTANT]
> Звездочкой (`*`) отмечены специфические параметры, задавать которые не рекомендуется. 

Под `ValidText` подразумевается непустой `WString`, `ValuedText` или `ValuedObject`.

- **`TOOLTIP_NONE`** — шаблон отсутствует, собирается полностью вручную.

---

- **`TOOLTIP_SIMPLE`** — простой тултип.
  - `name` (`ValidText`) — текст. Формат: 
    ```
    <header>
        <tip_white>
            <r name = "value" parsing = "smart" />
        </tip_white>
    </header>
    ```

---

- **`TOOLTIP_SIMPLEDESC`** — простой тултип-описание.
  - `name` (`ValidText`) — имя. Формат: 
    ```
    <header>
        <tip_white>
            <r name = "value" parsing = "smart" />
        </tip_white>
    </header>
    ```
  - `desc` (`ValidText`) — описание. Формат: 
    ```
    <tip_golden alignx = "left" >
        <r name = "value" parsing = "smart" />
    </tip_golden>
    ```
  - `*requirements` (`table`) — `predicateData` таблица условий (например, предикаты спелла).

---

- **`TOOLTIP_UNIT`** — тултип юнита.
  - `unitId` (`ObjectId`) — идентификатор юнита.
  - `name` (`ValidText`) — оверрайд имени.

---

- **`TOOLTIP_ITEM`** — тултип предмета.
  - `itemId` (`ObjectId`) — идентификатор предмета.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.
  - `ignoreBinding` (`boolean`) — если `true`, предмет считается непривязанным.
  - `binding` (`number`) — `enum ITEM_BINDING_*` оверрайд биндинга.
  - `bindResult` (`boolean`) — если `true`, считается, что предмет привязывается при получении.
  - `isCursed` (`boolean`) — оверрайд статуса проклятости.
  - `count` (`number` | `int`) — оверрайд количества предметов в стаке.
  - `*canExchange` (`boolean`) — возможность выставить предмет на биржу негоциантов.
  - `*endTime` (`number` | `int`) — время завершения предложения.
  - `*lotteryPrice` (`number` | `int`) — цена в лотерее.
  - `*lotteryDiscount` (`number` | `int`) — скидка в лотерее.
  - `*lotteryIsSuperPrize` (`boolean`) — является ли предмет суперпризом в лотерее.

---

- **`TOOLTIP_ITEM_VENDOR`** — тултип предмета в продаже. Аналогично `TOOLTIP_ITEM`. Дополнительно:
  - `quantity` (`number` | `int`) — количество предметов в продаже.
  - `showReputation` (`boolean`) — отображение информации о требуемой для покупки репутации.
  - `requiredUnlocks` (`table`) — `index from 1 of UnlockId` список возможностей, требуемых для покупки.
  - `requiredAchievements` (`table`) — `index from 1 of tables` список рейтинговых достижений, требуемых для покупки. Каждое значение — таблица с полями: 
    + `ruleId` (`RuleId`) — идентификатор ресурса рейтингового события.
    + `achievement` (`number` | `int`) — требуемое значение достижения.
  - `price` (`number` | `int`) — оверрайд цены покупки.
  - `*alternativePrice` (`table`) — `param for moneyCountAdvanced` альтернативная цена.

---

- **`TOOLTIP_ITEM_DEVICE`** — тултип предмета корабельного устройства в шкафу устройств. 
> [!IMPORTANT]
> Аналогично `TOOLTIP_ITEM`.
> Игнорируются: 
> - `ignoreBinding`, `binding`, `bindResult`, `count`.

---

- **`TOOLTIP_ITEM_BESTIARY`** — тултип предмета моба лабиринта в бестиарии.
> [!IMPORTANT]
> Аналогично `TOOLTIP_ITEM`.
> Игнорируются: 
> - `ignoreBinding`, `binding`, `bindResult`, `count`.

---

- **`TOOLTIP_SPELL`** — тултип спелла.
  - `spellId` (`SpellId`) — идентификатор ресурса спелла.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.
  - `customRank` (`number` | `int`) — оверрайд ранга.
  - `*tactics` (`boolean`) — обрезает большую часть информации (для тактик гильдии).

---

- **`TOOLTIP_SPELL_SHIP`** — тултип корабельного спелла. 
> [!IMPORTANT]
> Аналогично `TOOLTIP_SPELL`.

---

- **`TOOLTIP_SPELL_BUTTON`** — тултип кнопки спелла.
> [!IMPORTANT]
> Аналогично `TOOLTIP_SPELL`.

---

- **`TOOLTIP_BUFF`** — тултип бафа.
  - `buffId` (`ObjectId` | `BuffId`) — идентификатор бафа или ресурса бафа.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_ABILITY`** — тултип способности.
  - `abilityId` (`AbilityId`) — идентификатор ресурса способности.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.
  - `customRank` (`number` | `int`) — оверрайд ранга.

---

- **`TOOLTIP_GLOSSARY`** — тултип встроенной ссылки (для вложенных тултипов).
  - `glossaryId` (`GlossaryId`) — идентификатор ресурса глоссария.

---

- **`TOOLTIP_COMPONENT`** — тултип алхимического компонента.
  - `componentId` (`ComponentPropertyId`) — идентификатор ресурса алхимического свойства.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_RECIPE`** — тултип рецепта профессии.
  - `recipeId` (`RecipeId`) — идентификатор ресурса рецепта.
  - `armorCraft` (`boolean`) — определяет, являются ли компоненты рецепта предметами (`true`) или алхимическими компонентами (`false`).
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_USABLE_DEVICE`** — тултип UsableDevice.
  - `deviceId` (`ObjectId`) — идентификатор устройства.
  - `name` (`ValidText`) — оверрайд имени.

---

- **`TOOLTIP_USABLE_DEVICE_ACTION`** — тултип действия UsableDevice.
  - `deviceId` (`ObjectId`) — идентификатор устройства.
  - `index` (`number` | `int`) — индекс действия.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_ASTRAL_UNIT`** — тултип астрального юнита.
  - `unitId` (`ObjectId`) — идентификатор астрального юнита.
  - `name` (`ValidText`) — оверрайд имени.

---

- **`TOOLTIP_FAIRY`** — тултип покровителя.
  - `unitId` (`ObjectId`) — идентификатор юнита.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_BASE_TALENT`** — тултип таланта.
  - `position` (`table`) — позиция таланта: 
    + `row` (`number` | `int`) — строка (с 1)
    + `column` (`number` | `int`) — столбец (с 1)
    + `rank` (`number` | `int`) — ранг.
  - `isLocked` (`boolean`) — статус блокировки таланта.
  - `cost` (`table`) — данные о стоимости изучения: 
    + `value` (`number` | `int`) — стоимость в очках умений.
    + `spentValue` (`number` | `int`) — всего потрачено очков умений.
    + `count` (`number` | `int`) — доступно очков умений.
  - `parentRank` (`number` | `int`) — ранг родительского таланта.

---

- **`TOOLTIP_FIELD_TALENT`** — тултип вехи развития.
  - `position` (`table`) — позиция вехи развития: 
    + `field` (`number` | `int`, с 1), 
    + `row` (`number` | `int`, с 1), 
    + `column` (`number` | `int`, с 1).
    + `rank` (`number` | `int`) — ранг.
  - `cost` (`table`) — данные о стоимости изучения: 
    + `value` (`number` | `int`) — стоимость в вехах развития
    + `count` (`number` | `int`) — доступно вех развития.
    + `isAvailable` (`boolean`) — доступность для изучения (по соседним клеткам).

---

- **`TOOLTIP_REPUTATION`** — тултип репутации.
  - `factionId` (`FactionId`) — идентификатор ресурса фракции.
  - `name` (`ValidText`) — оверрайд имени.

---

- **`TOOLTIP_CURRENCY`** — тултип альтернативной валюты.
  - `currencyId` (`CurrencyId`) — идентификатор ресурса валюты.
  - `short` (`boolean`) — использование сокращенного варианта описания.
  - `couponBuyLimit` (`number` | `int`) — если задано, значение валюты принимается за `(couponBuyLimit - значение)`.

---

- **`TOOLTIP_CURRENCY_VENDOR`** — тултип цены в альтернативных валютах.
  - `prices` (`table`) — `index from 1 of CurencyId` список идентификаторов альтернативных валют.

---

- **`TOOLTIP_HEARTHSTONE`** — тултип камня путешественника.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_INNATE_STAT`** — тултип характеристики.
  - `statId` (`number`) — `enum ENUM_InnateStats_*` идентификатор характеристики.
  - `*info` (`table`) — `InnateStatsInfo` оверрайд информации о характеристиках.

---

- **`TOOLTIP_TRANSPORT`** — тултип астрального корабля.
  - `transportId` (`ObjectId`) — идентификатор астрального корабля.
  - `name` (`ValidText`) — оверрайд имени.

---

- **`TOOLTIP_BG_CONTROLPOINT`** — тултип контрольной точки сражения.
  - `pointId` (`ObjectId`) — идентификатор контрольной точки сражения.
  - `name` (`ValidText`) — оверрайд имени.

---

- **`TOOLTIP_MOUNT`** — тултип маунта.
  - `mountId` (`ObjectId`) — идентификатор маунта.
  - `mountSkinId` (`ObjectId`) — идентификатор окраса маунта.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_CONTEXT_ACTION`** — тултип контекстного действия.
  - `actionId` (`ObjectId`) — идентификатор контекстного действия.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_SKILL`** — тултип профессии.
  - `skillId` (`SkillId`) — идентификатор ресурса профессии.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_ZONE_PROGRESS`** — тултип квестпрогресса зоны.
  - `zonesMapId` (`ObjectId`) — идентификатор зоны (`cartographer.GetZonesMapQuests`).

---

- **`TOOLTIP_ASTRAL_SECTOR`** — тултип астрального сектора.
  - `sectorId` (`ObjectId`) — идентификатор астрального сектора.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_ASTRAL_POI`** — тултип точки интереса в астральном хабе.
  - `poiId` (`ObjectId`) — идентификатор точки интереса.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_ASTRAL_HUB`** — тултип астрального хаба.
  - `hubId` (`ObjectId`) — идентификатор астрального хаба.

---

- **`TOOLTIP_QUEST_COUNTER`** — тултип цели задания.
  - `objectiveId` (`ObjectId`) — идентификатор цели задания.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_QUEST`** — тултип задания.
  - `questId` (`QuestId`) — идентификатор ресурса задания.
  - `complete` (`boolean`) — если `true`, задание считается выполненным.
  - `compendium` (`boolean`) — является ли задание боевым походом.

---

- **`TOOLTIP_MAP_QUEST`** — тултип точки выполнения задания(ий) на карте.
  - `questId` (`QuestId`) — идентификатор ресурса основного задания (будет верхним в списке).
  - `objectives` (`table`) — `index from 1 of ObjectId` список целей задания(ий), связанных с данной точкой.
  - `quests` (`table`) — `index from 1 of QuestId` список ресурсов дополнительных заданий.

---

- **`TOOLTIP_RULE`** — тултип события.
  - `ruleId` (`ObjectId`) — идентификатор события.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_GUILD_TALENT`** — тултип таланта гильдии.
  - `field` (`number` | `int`) — поле.
  - `row` (`number` | `int`) — строка.
  - `column` (`number` | `int`) — столбец.
  - `shortDescription` (`boolean`) — если `true`, по возможности используется короткое описание.

---

- **`TOOLTIP_GUILD_ABILITY`** — тултип способности гильдии.
  - `abilityId` (`GuildAbilityId`) — идентификатор ресурса гильдейской способности.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.
  - `shortDescription` (`boolean`) — если `true`, по возможности используется короткое описание.

---

- **`TOOLTIP_SHIP_REACTOR`** — тултип реактора корабля.
  - `transportId` (`ObjectId`) — идентификатор корабля.

---

- **`TOOLTIP_PROCEDURAL_GOAL`** — тултип цели процедурного данжа.
  - `goalId` (`ObjectId`) — идентификатор цели.

---

- **`TOOLTIP_MAP_PROCEDURAL_GOAL`** — тултип точки выполнения цели(ей) процедурного данжа на карте.
  - `goalId` (`ObjectId`) — идентификатор основной цели.
  - `goals` (`table`) — `index from 1 of ObjectId` идентификаторы иных целей.

---

- **`TOOLTIP_PROCEDURAL_SCENARIOS`** — тултип сценария процедурного данжа.
  - `scenarioId` (`ObjectId`) — идентификатор сценария.

---

- **`TOOLTIP_INSTANCED_EVENT`** — тултип инстанс-события (PvP и PvE).
  - `instanceId` (`ObjectId`) — идентификатор события.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.
  - `needLeader` (`table`) — `param for TC_SMART_LINE` дополнительный текст в конце.
  - `needRole` (`table`) — `param for TC_SMART_LINE` дополнительный текст после `needLeader`.

---

- **`TOOLTIP_LFG_DESTINATION`** — тултип LFG.
  - `destinationId` (`LfgDestinationId`) — идентификатор ресурса LFG.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.
  - `isDepart` (`boolean`) — если `true`, отображаются проваленные требования к отправлению, иначе — к посещению.
  - `needLeader` (`table`) — `param for TC_SMART_LINE` дополнительный текст в конце.
  - `needRole` (`table`) — `param for TC_SMART_LINE` дополнительный текст после `needLeader`.

---

- **`TOOLTIP_HIDDEN_BUFFS`** — тултип списка спрятанных бафов.
  - `name` (`ValidText`) — имя.
  - `desc` (`ValidText`) — описание.
  - `list` (`table`) — `index from 1 of (ObjectId or BuffId)` список идентификаторов бафов (отображаются первые 10).
  - `more` (`table`) — `param for TC_SMART_LINE` дополнительный текст при длине списка более 10.

---

- **`TOOLTIP_MEDAL`** — тултип достижения.
  - `medalId` (`ObjectId`) — идентификатор достижения.
  - `desc` (`ValidText`) — оверрайд описания.
  - `isCompare` (`boolean`) — является ли тултип тултипом сравнения.
  - `compareId` (`ObjectId`) — идентификатор сравниваемого достижения.

---

- **`TOOLTIP_SOUL_TALENT`** — тултип таланта искры.
  - `current` (`AbilityId`) — идентификатор текущего ранга способности.
  - `next` (`AbilityId`) — идентификатор следующего ранга способности.
  - `compare` (`boolean`) — является ли тултип тултипом сравнения.

---

- **`TOOLTIP_MAP_MODIFIER`** — тултип модификатора карты.
  - `modifierId` (`ObjectId`) — идентификатор модификатора карты.
  - `name` (`ValidText`) — оверрайд имени.
  - `desc` (`ValidText`) — оверрайд описания.

---

- **`TOOLTIP_ARENA`** — тултип рейтингового достижения.
  - `unitId` (`ObjectId`) — идентификатор юнита-владельца достижения.
  - `type` (`number`) — `enum ?` тип рейтингового достижения (`matchMaking.GetRatingPvPScoreByUnitId`).

---

- **`TOOLTIP_HISTORY_PLATE`** — тултип операции в казне гильдии.
  - `ranks` (`table`) — `index from 1 of ValidText` тексты затронутых рангов.
  - `tabards` (`table`) — `index from 1 of ValidText` тексты затронутых типов накидок.

---

- **`TOOLTIP_SETBONUS`** — тултип сетевого бонуса.
  - `info` (`table`) — `setBonusInfo` один элемент из `itemLib.GetSetBonusRoot()`.
:::

::: details Компоненты тултипа
Каждый компонент описывается таблицей со следующими полями:
- **`type`** (`number`) — `enum TC_*` тип компонента.
- **`[1]`** (`any` | `nil`) — параметр компонента. Для большинства компонентов представляет собой таблицу. Если `nil`, компонент игнорируется. *(Примечание: использование единицы в качестве индекса — неудачное историческое решение, поменять слишком сложно).*
- **`updaters`** (`table`) — `tooltipUpdater` триггеры обновления. *(Доступно только внутри ContextTooltip), подробнее смотри в ClassTooltipComponents.lua.*

**Форматы текста по умолчанию:**
- **Default:** 
    ```
    <tip_base alignx = "left" >
        <rs class = "style">
            <r name = "value" parsing = "smart" />
            <r name = "value2" parsing = "smart" />
            <r name = "value3" parsing = "smart" />
        </rs>
    </tip_base>
    ```
- **DefaultRight:** 
    ```
    <tip_base alignx = "right" >
        <rs class = "style">
            <r name = "value"/>
            <r name = "value2"/>
            <r name = "value3"/>
        </rs>
    </tip_base>
    ```

**Список компонентов:**
- **`TC_SEPARATOR`** — разделительная линия. Пустая таблица параметров.

---

- **`TC_SMART_LINE`** — простой текст. Таблица параметров напрямую передается в `ValuedText:SetTextValues`. Если `format` не задан, используется Default (смотри выше).

---

- **`TC_ICON_SMART_LINE`** — текст с иконкой.
  - `text` (`table`) — `ValuedText:SetTextValues` текст. Если `format` не задан, используется Default.
  - `leftIcon` (`table`) — описание левой иконки, таблица с полями: 
    + `icon` (`UITextureId` | `TextureId`) — текстура BackLayer
    + `foreicon` (`UITextureId` | `TextureId`) — текстура FrontLayer
    + `color` (`Color`) — (table or string or uint32_t) цвет BackLayer
    + `forecolor` (`Color`) — (table or string or uint32_t) цвет FrontLayer
    + `fullsize` (`table`) — размер иконки по осям, если не задано, то берется из поля size
      + `sizeX` (`number` | `float`) — по X
      + `sizeY` (`number` | `float`) — по Y
    + `size` (`number` | `float`) — размер квадратной иконки, если не задано, то берется размер текстуры
  - `rightIcon` (`table`) — описание правой иконки (аналогично левой).

---

- **`TC_DOUBLE_LINE`** — двойной текст.
  - `left` (`table`) — `ValuedText:SetTextValues` текст слева. Если format не задан, то берется Default (смотри выше).
  - `right` (`table`) — `ValuedText:SetTextValues` текст справа. Если format не задан, то берется DefaultRight (смотри выше).

---

- **`TC_ICON_DOUBLE_LINE`** — двойной текст с иконкой.
    > [!IMPORTANT]
    > Аналогично `TC_DOUBLE_LINE`, плюс `leftIcon` и `rightIcon` как в `TC_ICON_SMART_LINE`.

---

- **`TC_ICON_BAR`** — несколько иконок в линию.
  - `[1-N]` (`table`) — параметры иконки, таблица с полями: 
    + `icon` (`UITextureId` | `TextureId`) — текстура
    + `size` (`number` | `float`) — размер квадратной иконки, если не задано, то берется 50х50
    + `text` (`ValidText`) — текст на иконке (расположен в правом нижнем углу)
    + `subicon` (`UITextureId` | `TextureId`) — текстура наложенной иконки, имеет размер 20х20 и расположена в левом верхнем углу

---

- **`TC_PRICE`** — цена. Параметр напрямую передается в `moneyCountAdvanced`. Может быть:
  - `number` (`int`) — число денег в меди. *(Важно: в одном тултипе может быть только одна такая цена).*
  - `table` (`[1-3] of tables`) — набор до трех валют (порядок справа налево), каждая это таблица с полями. Поля: 
    + `value` (`number` | `int`) — значение валюты
    + `currencyId` (`CurrencyId`) — идентификатор ресурса валюты, если задано, то: при наведении будет генерироваться суб-тултип валюты, текстура может быть взята из валюты
    + `texture` (`UITextureId` | `TextureId`) — текстура, должна быть задана либо явно, либо через currencyId
    + `text` (`ValidText`) — Текст вместо иконки / значения валюты, если задано, то currencyId, texture, value игнорируются
    + `shiftPosition` (`number` | `float`) — только если задан text, сдвиг текста по X, для тонкого тюнинга положения

---

- **`TC_ITEM_SOURCE`** — источник получения (обертка над `GlossaryId`).
  - `glossaryId` (`GlossaryId`) — идентификатор ресурса интерактивного описания.

---

- **`TC_PROGRESS_BAR`** — прогрессбар.
  - `color` (`Color`) — (table or string or uint32_t) цвет (по умолчанию `{ a = 1, r = 128/255, g = 184/255, b = 96/255 }`).
  - `label` (`table`) — `ValuedText:SetTextValues` кастомный текст.
  - `progressType` (`string`) — если `"reputation"`, то: 
    + `stateCur` (`number` | `int`) — текущее значение
    + `stateNext` (`number` | `int`) — максимальное значение 
  - Иначе: 
    + `state` (`number`) — `[0-100]` процент прогрессбара 
    + `isMeta` (`boolean`) — если true, то точность до сотых долей процента.

---

- **`TC_FIVESTARS_RATING`** — рейтинг.
  - `rating` (`number`) — `[0-5]` значение рейтинга.
  - `format` (`ValidText`) — текст.
:::

## Список параметров
- **`isActive`** (`boolean`)
    
    Флаг состояния тултипа. Значение `true` инициирует показ тултипа, значение `false` — скрывает его.

- **`tooltipData`** (`table` | `nil`)

    Таблица параметров тултипа. Обязательна к передаче, если `isActive` равен `true`. Структура таблицы описана в разделе `Описание tooltipData`. При `isActive == false` допускается передача `nil`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Отображение и скрытие тултипа предмета при наведении
```lua
function OnItemOver( reaction )
    local tooltip = reaction.active and {
        tooltip = TOOLTIP_ITEM,
        itemId = itemId,
        rect = reaction.widget:GetRealRect()
    }
    
    common.CallTooltip( reaction.active, tooltip )
end
```
::: info Описание примера
В примере формируется таблица `tooltip` с типом `TOOLTIP_ITEM`, идентификатором предмета и прямоугольником виджета для привязки. Затем вызывается `common.CallTooltip`, которая показывает тултип, если реакция активна (`reaction.active`), или скрывает его, если не активна.
:::

## Смотрите также
- [TOOLTIP_*](#типы-тултипов)
- [TC_*](#компоненты-тултипа)
- [ITEM_BINDING_*](enums.item#item-binding)
- [ENUM_InnateStats_*](enums.innatestats)
- [ValuedText:SetTextValues](ui.valuedtext#settextvalues)
- [moneyCountAdvanced](ui.money#moneycountadvanced)
- [itemLib.GetSetBonusRoot](itemlib.getsetbonusroot)
- [cartographer.GetZonesMapQuests](cartographer.getzonesmapquests)
- [matchMaking.GetRatingPvPScoreByUnitId](matchmaking.getratingpvpscorebyunitid)
- [WidgetSafe:GetRealRect](ui.widgets#widgetsafe-getrealrect)