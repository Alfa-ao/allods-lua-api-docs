import { defineConfig } from 'vitepress'

const base = '/allods-lua-api-docs/'

export default defineConfig( {
    base,
    title: "Allods Online Lua API",
    description: "Современная документация по Lua API для игры Аллоды Онлайн",
    lang: 'ru-RU',
    
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}/favicon.ico` }],
        // ['style', {}, `
        //     :root {
        //         --vp-sidebar-width: 320px; /* Увеличиваем ширину сайдбара */
        //     }
        //     .VPSidebar {
        //         padding-left: 32px !important;
        //         padding-right: 32px !important;
        //     }`
        // ]
    ],
    themeConfig: {
        logo: '/logo.png', // docs/public/logo.png
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Руководства', link: '/guides/introduction' },
            { text: 'API Справочник', link: '/api/' }
        ],

        sidebar: [
            /* {
                text: 'Начало работы',
                items: [
                    { text: 'Введение', link: '/guides/introduction' },
                    { text: 'Установка аддонов', link: '/guides/installation' }
                ]
            }, */
            {
                text: 'Lua API',
                items: [
                    /* { text: 'Обзор API', link: '/api/overview' },
                    { text: 'События (Events)', link: '/api/events' },
                    { text: 'Классы и Объекты', link: '/api/classes' },
                    { text: 'UI и Интерфейс', link: '/api/ui' }, */
                    { text: 'Category', collapsed: false, items: [
                        { text: 'Avatar', collapsed: true, items: [
                            { text: 'AcceptQuest', link: '/api/category/avatar/function.avatar.AcceptQuest' },
                            { text: 'AcceptShareQuest', link: '/api/category/avatar/function.avatar.AcceptShareQuest' },
                            { text: 'ActivateItem', link: '/api/category/avatar/function.avatar.ActivateItem' },
                            { text: 'ActivateItemAlternative', link: '/api/category/avatar/function.avatar.ActivateItemAlternative' },
                            { text: 'ApplyStoredTalents', link: '/api/category/avatar/function.avatar.ApplyStoredTalents' },
                            { text: 'ArrangeContainerItems', link: '/api/category/avatar/function.avatar.ArrangeContainerItems' },
                            { text: 'BindEmoteToActionPanel', link: '/api/category/avatar/function.avatar.BindEmoteToActionPanel' },
                            { text: 'BindItemToActionPanel', link: '/api/category/avatar/function.avatar.BindItemToActionPanel' },
                            { text: 'BindMountMetamorphToActionPanel', link: '/api/category/avatar/function.avatar.BindMountMetamorphToActionPanel' },
                            { text: 'BindMountSkinToActionPanel', link: '/api/category/avatar/function.avatar.BindMountSkinToActionPanel' },
                            { text: 'BindMountToActionPanel', link: '/api/category/avatar/function.avatar.BindMountToActionPanel' },
                            { text: 'BindSpellToActionPanel', link: '/api/category/avatar/function.avatar.BindSpellToActionPanel' },
                            { text: 'Buy', link: '/api/category/avatar/function.avatar.Buy' },
                            { text: 'BuyToSlot', link: '/api/category/avatar/function.avatar.BuyToSlot' },
                            { text: 'CalcCurrentGearScore', link: '/api/category/avatar/function.avatar.CalcCurrentGearScore' },
                            { text: 'CallSpark', link: '/api/category/avatar/function.avatar.CallSpark' },
                            { text: 'CanActivateItem', link: '/api/category/avatar/function.avatar.CanActivateItem' },
                            { text: 'CanActivateItemAlternative', link: '/api/category/avatar/function.avatar.CanActivateItemAlternative' },
                            { text: 'CancelClassChanger', link: '/api/category/avatar/function.avatar.CancelClassChanger' },
                            { text: 'CanDisassembleItem', link: '/api/category/avatar/function.avatar.CanDisassembleItem' },
                            { text: 'CanUpdateBaseTalent', link: '/api/category/avatar/function.avatar.CanUpdateBaseTalent' },
                            { text: 'CanUpdateFieldTalent', link: '/api/category/avatar/function.avatar.CanUpdateFieldTalent' },
                            { text: 'ChangeFairyBonus', link: '/api/category/avatar/function.avatar.ChangeFairyBonus' },
                            { text: 'CheckCanUseItem', link: '/api/category/avatar/function.avatar.CheckCanUseItem' },
                            { text: 'CheckCanUseItemOnPoint', link: '/api/category/avatar/function.avatar.CheckCanUseItemOnPoint' },
                            { text: 'ClearActionPanel', link: '/api/category/avatar/function.avatar.ClearActionPanel' },
                            { text: 'ClearMood', link: '/api/category/avatar/function.avatar.ClearMood' },
                            { text: 'ClearStoredTalents', link: '/api/category/avatar/function.avatar.ClearStoredTalents' },
                            { text: 'CloseLootBag', link: '/api/category/avatar/function.avatar.CloseLootBag' },
                            { text: 'ConvertMetaEnhancer', link: '/api/category/avatar/function.avatar.ConvertMetaEnhancer' },
                            { text: 'DeactivateUsableDevice', link: '/api/category/avatar/function.avatar.DeactivateUsableDevice' },
                            { text: 'DeclineShareQuest', link: '/api/category/avatar/function.avatar.DeclineShareQuest' },
                            { text: 'DiscardQuest', link: '/api/category/avatar/function.avatar.DiscardQuest' },
                            { text: 'DuplicateMetaEnhancerItem', link: '/api/category/avatar/function.avatar.DuplicateMetaEnhancerItem' },
                            { text: 'EnableClientDetector', link: '/api/category/avatar/function.avatar.EnableClientDetector' },
                            { text: 'EnableFreeKeys', link: '/api/category/avatar/function.avatar.EnableFreeKeys' },
                            { text: 'EndInspect', link: '/api/category/avatar/function.avatar.EndInspect' },
                            { text: 'EquipItemById', link: '/api/category/avatar/function.avatar.EquipItemById' },
                            { text: 'EquipItemByIdToSlot', link: '/api/category/avatar/function.avatar.EquipItemByIdToSlot' },
                            { text: 'FinallyRespawn', link: '/api/category/avatar/function.avatar.FinallyRespawn' },
                            { text: 'FindCurrentSecretComponentQuest', link: '/api/category/avatar/function.avatar.FindCurrentSecretComponentQuest' },
                            { text: 'FindNextQuest', link: '/api/category/avatar/function.avatar.FindNextQuest' },
                            { text: 'FindNextSecretComponentQuest', link: '/api/category/avatar/function.avatar.FindNextSecretComponentQuest' },
                            { text: 'GetAbilities', link: '/api/category/avatar/function.avatar.GetAbilities' },
                            { text: 'GetAbilityInfo', link: '/api/category/avatar/function.avatar.GetAbilityInfo' },
                            { text: 'GetAbilityReplacementSpells', link: '/api/category/avatar/function.avatar.GetAbilityReplacementSpells' },
                            { text: 'GetAbilityValuedObject', link: '/api/category/avatar/function.avatar.GetAbilityValuedObject' },
                            { text: 'GetAchievementValue', link: '/api/category/avatar/function.avatar.GetAchievementValue' },
                            { text: 'GetActionGroupSpells', link: '/api/category/avatar/function.avatar.GetActionGroupSpells' },
                            { text: 'GetActionGroupStatBonus', link: '/api/category/avatar/function.avatar.GetActionGroupStatBonus' },
                            { text: 'GetActionInfo', link: '/api/category/avatar/function.avatar.GetActionInfo' },
                            { text: 'GetActiveBuild', link: '/api/category/avatar/function.avatar.GetActiveBuild' },
                            { text: 'GetActiveCraftingSkill', link: '/api/category/avatar/function.avatar.GetActiveCraftingSkill' },
                            { text: 'GetActiveUsableDevice', link: '/api/category/avatar/function.avatar.GetActiveUsableDevice' },
                            { text: 'GetAttackResult', link: '/api/category/avatar/function.avatar.GetAttackResult' },
                            { text: 'GetAvailableItemQuests', link: '/api/category/avatar/function.avatar.GetAvailableItemQuests' },
                            { text: 'GetAvailableQuests', link: '/api/category/avatar/function.avatar.GetAvailableQuests' },
                            { text: 'GetBarriersDelay', link: '/api/category/avatar/function.avatar.GetBarriersDelay' },
                            { text: 'GetBarriersInfo', link: '/api/category/avatar/function.avatar.GetBarriersInfo' },
                            { text: 'GetBaseTalentInfo', link: '/api/category/avatar/function.avatar.GetBaseTalentInfo' },
                            { text: 'GetBaseTalentTableSize', link: '/api/category/avatar/function.avatar.GetBaseTalentTableSize' },
                            { text: 'GetBindedTransport', link: '/api/category/avatar/function.avatar.GetBindedTransport' },
                            { text: 'GetBuffValuedObject', link: '/api/category/avatar/function.avatar.GetBuffValuedObject' },
                            { text: 'GetBuildsCount', link: '/api/category/avatar/function.avatar.GetBuildsCount' },
                            { text: 'GetBuildsUnlockedCount', link: '/api/category/avatar/function.avatar.GetBuildsUnlockedCount' },
                            { text: 'GetBuildSwitchSpell', link: '/api/category/avatar/function.avatar.GetBuildSwitchSpell' },
                            { text: 'GetCategoryCurrencies', link: '/api/category/avatar/function.avatar.GetCategoryCurrencies' },
                            { text: 'GetChannelsInfo', link: '/api/category/avatar/function.avatar.GetChannelsInfo' },
                            { text: 'GetClass', link: '/api/category/avatar/function.avatar.GetClass' },
                            { text: 'GetClassChangeData', link: '/api/category/avatar/function.avatar.GetClassChangeData' },
                            { text: 'GetClassChangerBonusStats', link: '/api/category/avatar/function.avatar.GetClassChangerBonusStats' },
                            { text: 'GetClassChangerInfo', link: '/api/category/avatar/function.avatar.GetClassChangerInfo' },
                            { text: 'GetClassChangerRangeBonusStats', link: '/api/category/avatar/function.avatar.GetClassChangerRangeBonusStats' },
                            { text: 'GetClassId', link: '/api/category/avatar/function.avatar.GetClassId' },
                            { text: 'GetCommonFieldTalentInfo', link: '/api/category/avatar/function.avatar.GetCommonFieldTalentInfo' },
                            { text: 'GetComponentInfo', link: '/api/category/avatar/function.avatar.GetComponentInfo' },
                            { text: 'GetContextActionCooldown', link: '/api/category/avatar/function.avatar.GetContextActionCooldown' },
                            { text: 'GetContextActionInfo', link: '/api/category/avatar/function.avatar.GetContextActionInfo' },
                            { text: 'GetContextActionShortInfo', link: '/api/category/avatar/function.avatar.GetContextActionShortInfo' },
                            { text: 'GetCurrencies', link: '/api/category/avatar/function.avatar.GetCurrencies' },
                            { text: 'GetCurrencyCategories', link: '/api/category/avatar/function.avatar.GetCurrencyCategories' },
                            { text: 'GetCurrencyDescription', link: '/api/category/avatar/function.avatar.GetCurrencyDescription' },
                            { text: 'GetCurrencyId', link: '/api/category/avatar/function.avatar.GetCurrencyId' },
                            { text: 'GetCurrencyValue', link: '/api/category/avatar/function.avatar.GetCurrencyValue' },
                            { text: 'GetCurrentMaxSkillScore', link: '/api/category/avatar/function.avatar.GetCurrentMaxSkillScore' },
                            { text: 'GetCurrentQuest', link: '/api/category/avatar/function.avatar.GetCurrentQuest' },
                            { text: 'GetDestinyPoints', link: '/api/category/avatar/function.avatar.GetDestinyPoints' },
                            { text: 'GetDetectedObjects', link: '/api/category/avatar/function.avatar.GetDetectedObjects' },
                            { text: 'GetDeviceList', link: '/api/category/avatar/function.avatar.GetDeviceList' },
                            { text: 'GetDir', link: '/api/category/avatar/function.avatar.GetDir' },
                            { text: 'GetDressSlotInfo', link: '/api/category/avatar/function.avatar.GetDressSlotInfo' },
                            { text: 'GetDruidPetCommandPoints', link: '/api/category/avatar/function.avatar.GetDruidPetCommandPoints' },
                            { text: 'GetEmoteInfo', link: '/api/category/avatar/function.avatar.GetEmoteInfo' },
                            { text: 'GetEmotes', link: '/api/category/avatar/function.avatar.GetEmotes' },
                            { text: 'GetEngineerPetCommands', link: '/api/category/avatar/function.avatar.GetEngineerPetCommands' },
                            { text: 'GetExperience', link: '/api/category/avatar/function.avatar.GetExperience' },
                            { text: 'GetExpToLevel', link: '/api/category/avatar/function.avatar.GetExpToLevel' },
                            { text: 'GetFactionInfo', link: '/api/category/avatar/function.avatar.GetFactionInfo' },
                            { text: 'GetFairyMechanicsInfo', link: '/api/category/avatar/function.avatar.GetFairyMechanicsInfo' },
                            { text: 'GetFieldTalentInfo', link: '/api/category/avatar/function.avatar.GetFieldTalentInfo' },
                            { text: 'GetFieldTalentTableSize', link: '/api/category/avatar/function.avatar.GetFieldTalentTableSize' },
                            { text: 'GetGearScoreInfo', link: '/api/category/avatar/function.avatar.GetGearScoreInfo' },
                            { text: 'GetGlobalCooldown', link: '/api/category/avatar/function.avatar.GetGlobalCooldown' },
                            { text: 'GetGlossaryDescription', link: '/api/category/avatar/function.avatar.GetGlossaryDescription' },
                            { text: 'GetHealthRegen', link: '/api/category/avatar/function.avatar.GetHealthRegen' },
                            { text: 'GetHearthStoneCooldown', link: '/api/category/avatar/function.avatar.GetHearthStoneCooldown' },
                            { text: 'GetHearthStoneLocator', link: '/api/category/avatar/function.avatar.GetHearthStoneLocator' },
                            { text: 'GetHearthStoneSpell', link: '/api/category/avatar/function.avatar.GetHearthStoneSpell' },
                            { text: 'GetId', link: '/api/category/avatar/function.avatar.GetId' },
                            { text: 'GetInfiniteUnlockCategories', link: '/api/category/avatar/function.avatar.GetInfiniteUnlockCategories' },
                            { text: 'GetInfiniteUnlocks', link: '/api/category/avatar/function.avatar.GetInfiniteUnlocks' },
                            { text: 'GetInfiniteUnlocksInCategory', link: '/api/category/avatar/function.avatar.GetInfiniteUnlocksInCategory' },
                            { text: 'GetInnateStatDescription', link: '/api/category/avatar/function.avatar.GetInnateStatDescription' },
                            { text: 'GetInnateStats', link: '/api/category/avatar/function.avatar.GetInnateStats' },
                            { text: 'GetInspectInfo', link: '/api/category/avatar/function.avatar.GetInspectInfo' },
                            { text: 'GetInteractorCue', link: '/api/category/avatar/function.avatar.GetInteractorCue' },
                            { text: 'GetInteractorCurrentLocation', link: '/api/category/avatar/function.avatar.GetInteractorCurrentLocation' },
                            { text: 'GetInteractorInfo', link: '/api/category/avatar/function.avatar.GetInteractorInfo' },
                            { text: 'GetInteractorNextCues', link: '/api/category/avatar/function.avatar.GetInteractorNextCues' },
                            { text: 'GetInteractorTeleportLocations', link: '/api/category/avatar/function.avatar.GetInteractorTeleportLocations' },
                            { text: 'GetInterlocutor', link: '/api/category/avatar/function.avatar.GetInterlocutor' },
                            { text: 'GetItemClassList', link: '/api/category/avatar/function.avatar.GetItemClassList' },
                            { text: 'GetKills', link: '/api/category/avatar/function.avatar.GetKills' },
                            { text: 'GetLinkedTalents', link: '/api/category/avatar/function.avatar.GetLinkedTalents' },
                            { text: 'GetLootBagSlotCount', link: '/api/category/avatar/function.avatar.GetLootBagSlotCount' },
                            { text: 'GetLootBagSlots', link: '/api/category/avatar/function.avatar.GetLootBagSlots' },
                            { text: 'GetMainhandSpeed', link: '/api/category/avatar/function.avatar.GetMainhandSpeed' },
                            { text: 'GetManaRegen', link: '/api/category/avatar/function.avatar.GetManaRegen' },
                            { text: 'GetMapInstanceKick', link: '/api/category/avatar/function.avatar.GetMapInstanceKick' },
                            { text: 'GetMaxActionCount', link: '/api/category/avatar/function.avatar.GetMaxActionCount' },
                            { text: 'GetMaxSkillScore', link: '/api/category/avatar/function.avatar.GetMaxSkillScore' },
                            { text: 'GetMetaUpgradeCost', link: '/api/category/avatar/function.avatar.GetMetaUpgradeCost' },
                            { text: 'GetMetaUpgradeResults', link: '/api/category/avatar/function.avatar.GetMetaUpgradeResults' },
                            { text: 'GetMoney', link: '/api/category/avatar/function.avatar.GetMoney' },
                            { text: 'GetMoveToPointState', link: '/api/category/avatar/function.avatar.GetMoveToPointState' },
                            { text: 'GetNecromancerBloodPool', link: '/api/category/avatar/function.avatar.GetNecromancerBloodPool' },
                            { text: 'GetNextLevelUnlockInfo', link: '/api/category/avatar/function.avatar.GetNextLevelUnlockInfo' },
                            { text: 'GetObservedAstralUnit', link: '/api/category/avatar/function.avatar.GetObservedAstralUnit' },
                            { text: 'GetObservedTransport', link: '/api/category/avatar/function.avatar.GetObservedTransport' },
                            { text: 'GetOffhandSpeed', link: '/api/category/avatar/function.avatar.GetOffhandSpeed' },
                            { text: 'GetPetActiveSpell', link: '/api/category/avatar/function.avatar.GetPetActiveSpell' },
                            { text: 'GetPetMoveMode', link: '/api/category/avatar/function.avatar.GetPetMoveMode' },
                            { text: 'GetPetSpells', link: '/api/category/avatar/function.avatar.GetPetSpells' },
                            { text: 'GetPos', link: '/api/category/avatar/function.avatar.GetPos' },
                            { text: 'GetPower', link: '/api/category/avatar/function.avatar.GetPower' },
                            { text: 'GetProficiencies', link: '/api/category/avatar/function.avatar.GetProficiencies' },
                            { text: 'GetProficiencyInfo', link: '/api/category/avatar/function.avatar.GetProficiencyInfo' },
                            { text: 'GetPsionicContacts', link: '/api/category/avatar/function.avatar.GetPsionicContacts' },
                            { text: 'GetPsionicOrders', link: '/api/category/avatar/function.avatar.GetPsionicOrders' },
                            { text: 'GetQuestBook', link: '/api/category/avatar/function.avatar.GetQuestBook' },
                            { text: 'GetQuestHistory', link: '/api/category/avatar/function.avatar.GetQuestHistory' },
                            { text: 'GetQuestImage', link: '/api/category/avatar/function.avatar.GetQuestImage' },
                            { text: 'GetQuestInfo', link: '/api/category/avatar/function.avatar.GetQuestInfo' },
                            { text: 'GetQuestObjectiveInfo', link: '/api/category/avatar/function.avatar.GetQuestObjectiveInfo' },
                            { text: 'GetQuestProgress', link: '/api/category/avatar/function.avatar.GetQuestProgress' },
                            { text: 'GetQuestReward', link: '/api/category/avatar/function.avatar.GetQuestReward' },
                            { text: 'GetQuestShareInvitations', link: '/api/category/avatar/function.avatar.GetQuestShareInvitations' },
                            { text: 'GetQuestsLimit', link: '/api/category/avatar/function.avatar.GetQuestsLimit' },
                            { text: 'GetRangedSpeed', link: '/api/category/avatar/function.avatar.GetRangedSpeed' },
                            { text: 'GetRecipeAfflatusItem', link: '/api/category/avatar/function.avatar.GetRecipeAfflatusItem' },
                            { text: 'GetRecipeInfo', link: '/api/category/avatar/function.avatar.GetRecipeInfo' },
                            { text: 'GetRecommendedStats', link: '/api/category/avatar/function.avatar.GetRecommendedStats' },
                            { text: 'GetReputationInfo', link: '/api/category/avatar/function.avatar.GetReputationInfo' },
                            { text: 'GetReputationsList', link: '/api/category/avatar/function.avatar.GetReputationsList' },
                            { text: 'GetReputationValue', link: '/api/category/avatar/function.avatar.GetReputationValue' },
                            { text: 'GetResistances', link: '/api/category/avatar/function.avatar.GetResistances' },
                            { text: 'GetReturnableQuests', link: '/api/category/avatar/function.avatar.GetReturnableQuests' },
                            { text: 'GetRitualActivePreset', link: '/api/category/avatar/function.avatar.GetRitualActivePreset' },
                            { text: 'GetRubyStartLevel', link: '/api/category/avatar/function.avatar.GetRubyStartLevel' },
                            { text: 'GetSecondhandList', link: '/api/category/avatar/function.avatar.GetSecondhandList' },
                            { text: 'GetSecretComponents', link: '/api/category/avatar/function.avatar.GetSecretComponents' },
                            { text: 'GetSecretInfo', link: '/api/category/avatar/function.avatar.GetSecretInfo' },
                            { text: 'GetSecrets', link: '/api/category/avatar/function.avatar.GetSecrets' },
                            { text: 'GetServerId', link: '/api/category/avatar/function.avatar.GetServerId' },
                            { text: 'GetShardLevelCap', link: '/api/category/avatar/function.avatar.GetShardLevelCap' },
                            { text: 'GetSkillInfo', link: '/api/category/avatar/function.avatar.GetSkillInfo' },
                            { text: 'GetSkills', link: '/api/category/avatar/function.avatar.GetSkills' },
                            { text: 'GetSparkCost', link: '/api/category/avatar/function.avatar.GetSparkCost' },
                            { text: 'GetSparkReturnDelay', link: '/api/category/avatar/function.avatar.GetSparkReturnDelay' },
                            { text: 'GetSpecialStats', link: '/api/category/avatar/function.avatar.GetSpecialStats' },
                            { text: 'GetSpellBook', link: '/api/category/avatar/function.avatar.GetSpellBook' },
                            { text: 'GetSpentTalentPoints', link: '/api/category/avatar/function.avatar.GetSpentTalentPoints' },
                            { text: 'GetStalkerCartridge', link: '/api/category/avatar/function.avatar.GetStalkerCartridge' },
                            { text: 'GetStalkerDamagePoolInfo', link: '/api/category/avatar/function.avatar.GetStalkerDamagePoolInfo' },
                            { text: 'GetStalkerDamagePoolSize', link: '/api/category/avatar/function.avatar.GetStalkerDamagePoolSize' },
                            { text: 'GetTargetSales', link: '/api/category/avatar/function.avatar.GetTargetSales' },
                            { text: 'IsPetInCombat', link: '/api/category/avatar/function.avatar.IsPetInCombat' },
                            { text: 'PetAttack', link: '/api/category/avatar/function.avatar.PetAttack' },
                            { text: 'RejectTargetSale', link: '/api/category/avatar/function.avatar.RejectTargetSale' },
                            { text: 'SetPetAggroMode', link: '/api/category/avatar/function.avatar.SetPetAggroMode' },
                            { text: 'SetPetMoveMode', link: '/api/category/avatar/function.avatar.SetPetMoveMode' },
                            { text: 'SwapActionsInActionPanel', link: '/api/category/avatar/function.avatar.SwapActionsInActionPanel' },
                            { text: 'UnBindFromActionPanel', link: '/api/category/avatar/function.avatar.UnBindFromActionPanel' },
                        ] },
                        { text: 'Alchemy', collapsed: true, items: [
                            { text: 'События (Event)',          link: '/api/category/alchemy/events.alchemy' },
                            { text: 'CancelAlchemy',            link: '/api/category/alchemy/function.avatar.CancelAlchemy' },
                            { text: 'GetAlchemyDrumInfo',       link: '/api/category/alchemy/function.avatar.GetAlchemyDrumInfo' },
                            { text: 'GetAlchemyInfo',           link: '/api/category/alchemy/function.avatar.GetAlchemyInfo' },
                            { text: 'GetAlchemyMatchedRecipe',  link: '/api/category/alchemy/function.avatar.GetAlchemyMatchedRecipe' },
                            { text: 'IsAlchemyComponentsReady', link: '/api/category/alchemy/function.avatar.IsAlchemyComponentsReady' },
                            { text: 'IsAlchemyLineAvailable',   link: '/api/category/alchemy/function.avatar.IsAlchemyLineAvailable' },
                            { text: 'PutAlchemyItemToSlot',     link: '/api/category/alchemy/function.avatar.PutAlchemyItemToSlot' },
                        ] },
                        { text: 'Auction', collapsed: true, items: [
                            { text: 'Константы (Const)',       link: '/api/category/auction/constants.auction' },
                            { text: 'Перечисления (Enums)',    link: '/api/category/auction/enums.auction' },
                            { text: 'События (Event)',         link: '/api/category/auction/events.auction' },
                            { text: 'Bid',                     link: '/api/category/auction/function.auction.Bid' },
                            { text: 'Buyout',                  link: '/api/category/auction/function.auction.Buyout' },
                            { text: 'CanCreateForItem',        link: '/api/category/auction/function.auction.CanCreateForItem' },
                            { text: 'CreateForItem',           link: '/api/category/auction/function.auction.CreateForItem' },
                            { text: 'Discard',                 link: '/api/category/auction/function.auction.Discard' },
                            { text: 'GetAuctionInfo',          link: '/api/category/auction/function.auction.GetAuctionInfo' },
                            { text: 'GetAuctions',             link: '/api/category/auction/function.auction.GetAuctions' },
                            { text: 'GetAuctionsCount',        link: '/api/category/auction/function.auction.GetAuctionsCount' },
                            { text: 'GetAuctionsPage',         link: '/api/category/auction/function.auction.GetAuctionsPage' },
                            { text: 'GetAuctionsPageCount',    link: '/api/category/auction/function.auction.GetAuctionsPageCount' },
                            { text: 'GetAuctionState',         link: '/api/category/auction/function.auction.GetAuctionState' },
                            { text: 'GetItemForegroundLevel',  link: '/api/category/auction/function.auction.GetItemForegroundLevel' },
                            { text: 'GetProperties',           link: '/api/category/auction/function.auction.GetProperties' },
                            { text: 'IsCreationInProgress',    link: '/api/category/auction/function.auction.IsCreationInProgress' },
                            { text: 'IsSearchInProgress',      link: '/api/category/auction/function.auction.IsSearchInProgress' },
                            { text: 'IsSearchNameValid',       link: '/api/category/auction/function.auction.IsSearchNameValid' },
                            { text: 'Search',                  link: '/api/category/auction/function.auction.Search' },
                        ] },
                        { text: 'UserMods', link: '/api/category/userMods', collapsed: true, items: [
                            { text: 'FromValuedText',          link: '/api/category/userMods/function.userMods.FromValuedText' },
                            { text: 'FromWString',             link: '/api/category/userMods/function.userMods.FromWString' },
                            { text: 'ToWString',               link: '/api/category/userMods/function.userMods.ToWString' },
                            { text: 'SetAvatarConfigSection',  link: '/api/category/userMods/function.userMods.SetAvatarConfigSection' },
                            { text: 'GetAvatarConfigSection',  link: '/api/category/userMods/function.userMods.GetAvatarConfigSection' },
                            { text: 'SetGlobalConfigSection',  link: '/api/category/userMods/function.userMods.SetGlobalConfigSection' },
                            { text: 'GetGlobalConfigSection',  link: '/api/category/userMods/function.userMods.GetGlobalConfigSection' },
                            { text: 'GetAccountUniqueId',      link: '/api/category/userMods/function.userMods.GetAccountUniqueId' },
                            { text: 'GetResourcePersistentId', link: '/api/category/userMods/function.userMods.GetResourcePersistentId' },
                            { text: 'GetCallStack',            link: '/api/category/userMods/function.userMods.GetCallStack' },
                            { text: 'SendSelfChatMessage',     link: '/api/category/userMods/function.userMods.SendSelfChatMessage' },
                            
                        ] },
                        { text: 'WString', collapsed: true, items: [
                            { text: 'Compare',   link: '/api/category/WString/WString.Compare' },
                            { text: 'IsContain', link: '/api/category/WString/WString.IsContain' },
                            { text: 'IsEmpty',   link: '/api/category/WString/WString.IsEmpty' },
                            { text: 'ToAbbr',    link: '/api/category/WString/WString.ToAbbr' },
                            { text: 'ToInt',     link: '/api/category/WString/WString.ToInt' },
                            { text: 'ToLower',   link: '/api/category/WString/WString.ToLower' },
                            { text: 'ToUpper',   link: '/api/category/WString/WString.ToUpper' },
                            { text: 'Truncate',  link: '/api/category/WString/WString.Truncate' },
                        ] },
                    ] },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Alfa-ao/allods-lua-api-docs' }
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: 'Поиск',
                                buttonAriaLabel: 'Поиск'
                            },
                            modal: {
                                displayDetails: 'Показать подробный список',
                                resetButtonTitle: 'Сбросить поиск',
                                backButtonTitle: 'Закрыть поиск',
                                noResultsText: 'Нет результатов',
                                footer: {
                                    selectText: 'Выбрать',
                                    selectKeyAriaLabel: 'Enter',
                                    navigateText: 'Навигация',
                                    navigateUpKeyAriaLabel: 'Стрелка вверх',
                                    navigateDownKeyAriaLabel: 'Стрелка вниз',
                                    closeText: 'Закрыть',
                                    closeKeyAriaLabel: 'Esc'
                                }
                            }
                        }
                    }
                }
            }
        },
        
        editLink: {
            pattern: 'https://github.com/Alfa-ao/allods-lua-api-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub' 
        },
        
        // Блок "Последнее обновление"
        lastUpdated: {
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'medium'
            }
        },
    }
} )